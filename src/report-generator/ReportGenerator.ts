import DateHelper from "./DateHelper";
import IReport from './IReport';
import IReportInput from './IReportInput';
import IReportLine from './IReportLine';

export default class ReportGenerator {

    private AVG_FUEL_CONSUMTION = 7.5;

    public GenerateReport(input: IReportInput): IReport {
        const daysOff =  input.daysOff.split(',').map( s => parseInt(s,10));
        const dateHelper = new DateHelper(input.year, input.month,daysOff);

        const lines:IReportLine[] = this.generateLines(input, dateHelper);
        const totalDistanceDriven = Math.floor((dateHelper.numberOfDaysInOffice() * input.tripDistance * 2));
        const totalBurnedFuel = Math.round((this.AVG_FUEL_CONSUMTION * totalDistanceDriven) / 100);

        return {
            companyName: input.companyName,
            driverName: input.driverName,
            lines,
            month: input.month,
            totalBurnedFuel,
            totalDaysInOffice: dateHelper.numberOfDaysInOffice(),
            totalDistanceDriven,
            totalWorkDays: dateHelper.numberOfWorkDaysInMonth(),
            vehiclePlate: input.vehiclePlate,
            year: input.year,
        };
    }

    private generateLines(input: IReportInput, dateHelper: DateHelper): IReportLine[] {

        const distanceEstimatedForOffDay = this.valculateDistanceDrivenEachOffDay(input, dateHelper);
        let tempMileage = input.vehicleStartMileage;

        const res: IReportLine[] = [];

        dateHelper.allDatesInMonth().forEach(date => {
            if (dateHelper.isDayNotInOffice(date)) {
                tempMileage += distanceEstimatedForOffDay;
            }
            else {
                [0, 1].forEach(num => {
                    res.push({
                        date,
                        distanceDriven: input.tripDistance,
                        fromLocation: num === 0 ? input.homeAddress : input.workAddress,
                        millageEnd: Math.floor(tempMileage + (num + 1) * input.tripDistance),
                        millageStart: Math.floor(tempMileage + num * input.tripDistance),
                        toLocation: num === 0 ? input.workAddress : input.homeAddress
                    });
                });
                tempMileage += 2 * input.tripDistance;
            }
        });

        return res;
    }

    // assume equal distance driven on every weekend and off day
    private valculateDistanceDrivenEachOffDay(input: IReportInput, dateHelper: DateHelper) {

        const totalDistanceDriven = input.vehicleEndMileage - input.vehicleStartMileage;
        const totalDistanceDrivenToWork = input.tripDistance * 2 * dateHelper.numberOfDaysInOffice();
        const distanceDrivenEachOffDay = (totalDistanceDriven - totalDistanceDrivenToWork) / dateHelper.numberOfDaysNotInOffice();
        return distanceDrivenEachOffDay;

    }

}