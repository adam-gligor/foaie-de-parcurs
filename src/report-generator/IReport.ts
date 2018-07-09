import IReportLine from './IReportLine';

export default interface IReport {
    companyName: string,
    vehiclePlate: string,
    driverName: string,
    year: number;
    month: number,
    totalDistanceDriven: number,
    totalDaysInOffice: number,
    totalWorkDays: number,
    totalBurnedFuel: number,
    lines: IReportLine[]
}