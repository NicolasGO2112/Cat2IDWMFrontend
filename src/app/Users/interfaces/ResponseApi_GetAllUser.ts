export interface ResponseAPIGetAll {
    message:    string;
    totalUsers: number;
    totalPages: number;
    users:      User[];
}

export interface User {
    name:     string;
    email:    string;
    birthday: string;
    gender:   string;
}