export class UserEntity {
    constructor(
        public id: number,
        public username: string,
        public email: string,
        public password: string,
        public profile_picture_url?: string | null,
        public registration_date?: Date,
        public last_login_date?: Date
    ) {}
}
