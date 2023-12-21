import { Router } from "express";
import { OcrController } from "./controller";
import { OcrDatasourceImpl } from "../../infrastructure";
import { OcrRepositoryImpl } from "../../infrastructure/repositories/ocr.repository.impl";
import { upload } from "../../shared";

export class OcrRoutes {
    static get routes(): Router {
        const router = Router();
        const datasource = new OcrDatasourceImpl();
        const ocrRepository = new OcrRepositoryImpl(datasource);

        const controller = new OcrController(ocrRepository);

        router.post("/scan", upload.single("image"), controller.scan);

        return router;
    }
}
