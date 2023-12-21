import { IOcrEntity } from "../../ts";
import { OcrDto } from "../dtos";
import { IOcrRepository } from "../repositories/ocr.repository";

export class Ocr {
    constructor(private readonly ocrRepository: IOcrRepository) {}
    execute = async (ocr: OcrDto): Promise<IOcrEntity> => {
        const ocrRes = await this.ocrRepository.scan(ocr);
        return ocrRes;
    };
}
