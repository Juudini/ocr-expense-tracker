import { SigninUserDto, SignupUserDto } from "../";
import { IUserEntity } from "../../ts";
export interface IAuthDatasource {
    signin(signinUserDto: SigninUserDto): Promise<IUserEntity>;
    signup(signupUserDto: SignupUserDto): Promise<IUserEntity>;
}
