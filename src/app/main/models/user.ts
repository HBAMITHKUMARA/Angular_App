export class User {
    email: string;
    password: {
        pwd: string;
        confirmPwd: string;
    }

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
