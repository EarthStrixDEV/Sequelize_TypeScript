export interface UserModel {
    id?: number;
    name?: string;
    age?: string;
    salary?: string;
    department?: string;
    isMarried?: boolean;
    isSeniorJob?: boolean;
}

export interface CreateUser {
    name?: string;
    age?: string;
    salary?: string;
    department?: string;
    isMarried?: boolean;
    isSeniorJob?: boolean;
}

export type UserID = number;