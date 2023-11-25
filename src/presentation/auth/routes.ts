import { Router } from "express";

export class AuthRoutes {
    static get routes(): Router {
        const router = Router();

        router.get("/", (_req, res) => {
            res.json({ message: "pong" });
        });

        return router;
    }
}
