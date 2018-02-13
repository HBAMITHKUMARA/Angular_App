export class User {
    email: string;
    password: string;
    cPassword: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
