export class Contact {
    contactId: number = 0;
    name: string = '';
    email: string = '';
    subject: string = '';
    massage: string = '';
}

export class Complaint {
    ComplaintId?: number = 0;
    FullName?: string = '';
    Email?: string = '';
    Mobile?: string = '';
    Aadharcard?: string = '';
    ComplaintType?: string = '';
    ComplaintDate?: any;
    ComplaintDetails?: string = '';
    InsertTime? = '';
    UpdatTime?: any;
}
export class Prediction {
    PredictionId: number = 0;
    Year: number = 0;
    State: number = 0;
    City: number = 0;
}