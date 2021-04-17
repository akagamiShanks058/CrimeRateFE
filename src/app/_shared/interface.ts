export interface Interface {
}

export interface User{
    id: string;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    token: string;
}

export interface Register {
    FirstName: string;
    LastName: string;
    Username: string;
    Password: string;
}

export interface Login {
    Username: string;
    Password: string;
}

export interface Customer {
    CustId: number;
    Name: string;
    Address: string;
    Mobile: string;
    Email: string;
}

export interface Year {
    id : number;
    title : string;
}

export interface State {
    id : number;
    title : string;
}

export interface City {
    id : number;
    title : string;
}

export interface CrimeType {
    id : number;
    title : string;
}