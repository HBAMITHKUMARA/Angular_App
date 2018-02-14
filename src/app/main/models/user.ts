export class User {
    name: string;
    account: {
        email: string;
        password: string;
        confirm: string;
    };

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
