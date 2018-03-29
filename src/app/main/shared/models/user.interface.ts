export interface UserLazy {
    user: User;
    payment: Payment;
    contact: Contact;
}

export interface User {
    userName: string;
    fullName: string;
    email: string;
    password: string;
}

export interface Payment {
    cards?: (CardsEntity)[] | null;
}

export interface CardsEntity {
    type: string;
    upi: string;
    number: number;
    expiry: number;
}

export interface Contact {
    email: Email;
    phone: Phone;
}

export interface Email {
    primary: string;
    secondary: string;
}

export interface Phone {
    primary: number;
    secondary: number;
}
