export interface User {
    name: string;
    account: {
        email: string;
        password: string;
        confirm: string;
    };
}
