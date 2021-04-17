import { HttpHeaders } from "@angular/common/http";

enum PrintMedia {
    Newspaper,
    Newsletter,
    Magazine,
    Book
}

const API_URL = 'https://localhost:44353/';

let authorizationData = 'Basic ' + 'xssdsdasdajsidbauhsabauh';

const headerOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': authorizationData
    })
};