import IReportInput from './IReportInput';

class DataStore {

    private localStorageOn: boolean;
    private INPUT_KEY = "input";
    private data: IReportInput | null;

    constructor() {
        this.localStorageOn = typeof (Storage) !== "undefined";
        this.data = null;
    }

    public save(data: IReportInput) {

        this.data = data;

        if (this.localStorageOn) {
            localStorage.setItem(this.INPUT_KEY, JSON.stringify(data));
        }

    }

    public load(): IReportInput {

        // todo: use empty object
        const tmp: IReportInput = {
            companyName: "NetMatch",
            daysOff: "",
            driverName: "Adam Gligor",
            homeAddress: "str Tasnad no18 ap63",
            month: 1, // -1
            tripDistance: 7,
            vehicleEndMileage: 100100,
            vehiclePlate: "CJ15CRP",
            vehicleStartMileage: 98000,
            workAddress: "str BS Delavranca 8-10",
            year: 2018
        }

        if (this.localStorageOn) {
            const s = localStorage.getItem(this.INPUT_KEY);

            if (s !== null) {
                this.data = JSON.parse(s) as IReportInput;
            }
        }

        if (this.data === null) {
            this.data = tmp;
        }

        return this.data;
    }
}

const inst = new DataStore();

export default inst;