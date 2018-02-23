export interface User {
    user: UserEntity;
    payment: Payment;
    contact: Contact;
}

export interface UserEntity {
    fullName: string;
    email: string;
    password: string;
}

export interface Payment {
    cards?: (CardEntity)[] | null;
}

export interface CardEntity {
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
