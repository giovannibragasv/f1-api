export class DriverDto {
    driverId: string;
    driverCode: string;
    firstName: string;
    surname: string;
    dateOfBirth: Date;
    nationality: string;
    url: string;
}

export interface FindAllParameters {
    firstName: string;
    surname: string;
}