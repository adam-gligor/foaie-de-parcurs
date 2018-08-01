
export default class DateTimeHelper {

    private daysInMonth: Date[];
    private offDays: number[];

    constructor(year: number, month: number, offDays: number[]) {

        this.daysInMonth = this.getDaysInMonth(month -1, year); // because months are 0-11
        this.offDays = offDays;
    }

    public allDatesInMonth() {
        return this.daysInMonth;
    }

    public isDayNotInOffice(date: Date) {
        return this.isWeekendDay(date) || this.isOffDay(date);
    }

    public numberOfDaysInOffice() {
        return this.daysInMonth
            .filter(d => !this.isDayNotInOffice(d))
            .length;
    }

    public numberOfDaysNotInOffice() {
        return this.daysInMonth
            .filter(d => this.isDayNotInOffice(d))
            .length;
    }

    public numberOfWorkDaysInMonth() {
        return this.daysInMonth
            .filter(d => !this.isWeekendDay(d))
            .length;
    }

    private getDaysInMonth(month: number, year: number) {

        const date: Date = new Date(year, month, 1);
        const days: Date[] = [];
        while (date.getMonth() === month) {
            days.push(new Date(date));
            date.setDate(date.getDate() + 1);
        }
        return days;

    }

    private isWeekendDay(date: Date) {
        const day = date.getDay();
        return (day === 6) || (day === 0);// 6 = Saturday, 0 = Sunday
    }

    private isOffDay(date: Date) {
        return this.offDays.indexOf(date.getDay()) > -1;
    }
}