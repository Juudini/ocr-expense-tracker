import "dotenv/config";
import { get } from "env-var";

export const envs = {
    MODE: get("MODE").required().asString(),
    PORT: get("PORT").required().asPortNumber()
};
