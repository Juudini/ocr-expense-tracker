import { envs, logger } from "../../config";
import { CustomError, OcrDto } from "../../domain";
import { ImageAnnotatorClient } from "@google-cloud/vision";

import { OcrMapper } from "../mappers/ocr.mapper";
import { IOcrDatasource } from "../../domain/datasources/ocr.datasource";
import { IOcrEntity } from "../../ts";

const visionClient = new ImageAnnotatorClient({
    credentials: {
        client_email: envs.CLIENT_EMAIL.split(String.raw`\n`).join("\n"),
        private_key: envs.PRIVATE_KEY.split(String.raw`\n`).join("\n")
    }
});

export class OcrDatasourceImpl implements IOcrDatasource {
    constructor() {}

    scan = async (ocrDto: OcrDto): Promise<IOcrEntity> => {
        const { imageData } = ocrDto;
        try {
            if (!imageData) {
                throw CustomError.badRequest("Missing file");
            }

            const [result] = await visionClient.documentTextDetection(imageData.buffer);

            if (!result || !result.textAnnotations) {
                throw CustomError.badRequest("Invalid response from Vision API");
            }

            const annotations = result.textAnnotations;
            logger.info("Text Annotations:", annotations);

            return OcrMapper.ocrEntityFromObject(annotations);
        } catch (err) {
            logger.error(`Error in OCR scan: ${err}`);
            throw CustomError.internalServer();
        } finally {
            await visionClient.close();
        }
    };
}
