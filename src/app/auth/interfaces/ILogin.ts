import { IUser } from "src/interfaces/IUser";

export interface ILogin {
    email: string;
    password: string;
}

export interface IRespLogin {
    msg: string;
    status: string;
    user: IUser,
    token: string;
}
