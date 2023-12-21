import { Router } from "express";
import { AuthRoutes } from "./auth/routes";
import { OcrRoutes } from "./ocr/routes";

export class AppRoutes {
    static get routes(): Router {
        const router = Router();

        router.use("/api/sessions", AuthRoutes.routes);
        router.use("/api/ocr/", OcrRoutes.routes);

        return router;
    }
}
