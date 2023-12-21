import { Request, Response } from "express";
import { logger } from "../../config";
import { CustomError, Ocr, OcrDto } from "../../domain";
import { IOcrRepository } from "../../domain/repositories/ocr.repository";

export class OcrController {
    constructor(private readonly ocrRepository: IOcrRepository) {}

    private handleError = (err: unknown, res: Response) => {
        if (err instanceof CustomError) {
            return res.status(err.statusCode).json({ error: err.message });
        }
        logger.error(err);
        return res.status(500).json({ err: "Something went wrong!" });
    };

    scan = (req: Request, res: Response) => {
        const [err, scanOcr] = OcrDto.create(req.file!);

        if (err) {
            return res.status(400).json({ error: err });
        }

        new Ocr(this.ocrRepository)
            .execute(scanOcr!)
            .then(data => res.json(data))
            .catch(err => this.handleError(err, res));
    };
}
