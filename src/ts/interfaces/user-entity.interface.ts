export interface IUserEntity {
    id: number;
    username: string;
    email: string;
    password: string;
    profile_picture_url?: string | null;
    registration_date?: Date;
    last_login_date?: Date;
}
