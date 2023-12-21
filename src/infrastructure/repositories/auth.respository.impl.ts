import { IAuthDatasource, IAuthRepository, SigninUserDto, SignupUserDto, UserEntity } from "../../domain";

export class AuthRepositoryImpl implements IAuthRepository {
    constructor(private readonly authDatasource: IAuthDatasource) {}
    signin = (signinUserDto: SigninUserDto): Promise<UserEntity> => {
        return this.authDatasource.signin(signinUserDto);
    };

    signup = (signupUserDto: SignupUserDto): Promise<UserEntity> => {
        return this.authDatasource.signup(signupUserDto);
    };
}
