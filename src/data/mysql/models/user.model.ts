import { logger } from "../../../config";
import { SignupUserDto, CustomError, UserEntity } from "../../../domain";
import { PrismaClient } from "@prisma/client";

export class UserModel {
    private readonly prisma: PrismaClient;
    constructor() {
        this.prisma = new PrismaClient();
    }

    create = async (signupUserDto: SignupUserDto): Promise<UserEntity> => {
        const { username, email, password } = signupUserDto;
        try {
            const createdUser: UserEntity = await this.prisma.user.create({
                data: { username, email, password, last_login_date: new Date() }
            });

            return createdUser;
        } catch (err) {
            logger.error(err);
            throw CustomError.internalServer();
        }
    };

    findOneByEmail = async (email: string): Promise<UserEntity> => {
        try {
            const result: UserEntity | null = await this.prisma.user.findUnique({ where: { email: email } });

            return result as UserEntity;
        } catch (err) {
            logger.error(err);
            throw CustomError.internalServer();
        }
    };

    findEmail = async (email: string): Promise<boolean> => {
        try {
            const result: number = await this.prisma.user.count({ where: { email } });

            return result > 0;
        } catch (err) {
            logger.error(err);
            throw CustomError.internalServer();
        }
    };
}
