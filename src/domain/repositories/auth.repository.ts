import { SigninUserDto, SignupUserDto } from "../";
import { IUserEntity } from "../../ts";
export interface IAuthRepository {
    signin(signinUserDto: SigninUserDto): Promise<IUserEntity>;
    signup(signupUserDto: SignupUserDto): Promise<IUserEntity>;
}
