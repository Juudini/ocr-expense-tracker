import { logger } from "../../config";
import { IAuthDatasource, BcryptAdapter, CustomError, SigninUserDto, SignupUserDto, UserEntity } from "../../domain";

import { IUserData } from "../../ts";
import { UserModel } from "../../data/mysql/models/user.model";
import { UserMapper } from "../mappers/user.mapper";

type HashFunction = (password: string) => Promise<string>;
type CompareFunction = (password: string, hashed: string) => Promise<boolean>;

export class AuthDatasourceImpl implements IAuthDatasource {
    constructor(
        private readonly hashPassword: HashFunction = BcryptAdapter.hash,
        private readonly comparePassword: CompareFunction = BcryptAdapter.compare,
        private readonly userModel = new UserModel()
    ) {}

    signin = async (signinUserDto: SigninUserDto): Promise<UserEntity> => {
        const { email, password } = signinUserDto;
        try {
            const isUser: IUserData = await this.userModel.findOneByEmail(email);

            if (!isUser) throw CustomError.badRequest("Email not exists");

            const isMatch = await this.comparePassword(password, isUser.password);

            if (!isMatch) throw CustomError.badRequest("Password is not valid");

            const userData: IUserData = {
                id: isUser.id,
                username: isUser.username,
                email: isUser.email,
                password: isUser.password
            };

            return UserMapper.userEntityFromObject(userData);
        } catch (err) {
            logger.error(err);
            throw CustomError.internalServer();
        }
    };

    signup = async (signupUserDto: SignupUserDto): Promise<UserEntity> => {
        const { username, email, password } = signupUserDto;
        try {
            const isEmail: boolean = await this.userModel.findEmail(email);

            if (isEmail) throw CustomError.badRequest("Already exists");

            const hashedPassword = await this.hashPassword(password);

            const user = {
                username,
                email,
                password: hashedPassword
            };

            const userData: IUserData = await this.userModel.create(user);

            return UserMapper.userEntityFromObject(userData);
        } catch (err) {
            logger.error(err);
            throw CustomError.internalServer();
        }
    };
}
