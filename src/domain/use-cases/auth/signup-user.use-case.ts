import { IAuthRepository, CustomError, SignupUserDto, JwtAdapter } from "../../../domain";

type SignToken = (payload: object, duration?: string) => Promise<string | null>;

type UserToken = { token: string };

interface SignupUserUseCase {
    execute(signupUserDto: SignupUserDto): Promise<UserToken>;
}
export class SignupUser implements SignupUserUseCase {
    constructor(
        private readonly authRepository: IAuthRepository,
        private readonly signToken: SignToken = JwtAdapter.generateToken
    ) {}

    execute = async (signupUserDto: SignupUserDto): Promise<UserToken> => {
        const user = await this.authRepository.signup(signupUserDto);

        const token = await this.signToken({ id: user.id, username: user.username, email: user.email }, "2h");

        if (!token) throw CustomError.internalServer("Error generating token");

        return { token };
    };
}
