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
    y2019:number;
    y2020:number;
    y2021:number;
    y2022:number;
    y2023:number;
    p2020:number;
    p2021:number;
    p2022:number;
    p2023:number;

}

export interface City {
    id : number;
    title : string;
    y2019:number;
    y2020:number;
    y2021:number;
    y2022:number;
    y2023:number;
    p2020:number;
    p2021:number;
    p2022:number;
    p2023:number;
}

export interface CrimeType {
    id : number;
    title : string;
}