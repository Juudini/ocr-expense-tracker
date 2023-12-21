import "dotenv/config";
import { get } from "env-var";

export const envs = {
    NODE_ENV: get("NODE_ENV").required().asString(),
    PORT: get("PORT").required().asPortNumber(),
    JWT_SEED: get("JWT_SEED").required().asString(),
    DB_USERNAME: get("DB_USERNAME").required().asString(),
    DB_PASSWORD: get("DB_PASSWORD").required().asString(),
    DB_DATABASE: get("DB_DATABASE").required().asString(),
    DOCKER_PORT: get("DOCKER_PORT").required().asPortNumber(),
    CLIENT_EMAIL: get("CLIENT_EMAIL").required().asString(),
    PRIVATE_KEY: get("PRIVATE_KEY").required().asString()
};
