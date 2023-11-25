import { envs, logger } from "./config";
import { CustomError } from "./domain";
import { Server } from "./presentation/server";
import { AppRoutes } from "./presentation/routes";

(async () => {
    main();
})();

async function main() {
    try {
        new Server({ port: envs.PORT, routes: AppRoutes.routes }).start();
    } catch (err) {
        logger.error(err);
        throw CustomError.internalServer();
    }
}
