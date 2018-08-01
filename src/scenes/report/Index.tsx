import * as React from 'react';
import dataStore from '../../report-generator/DataStore';
import IReportInput from '../../report-generator/IReportInput';
import ReportGenerator from '../../report-generator/ReportGenerator';
import './index.css';
export interface IState {
    input: IReportInput;
}

// export interface IProps {

// }

export default class Index extends React.Component<{}, IState> {

    constructor(props: {}) {
        super(props);
        this.state = {
            input: dataStore.load()
        }
    }

    public render() {

        const input = this.state.input;
        const reportGenerator = new ReportGenerator();
        const report = reportGenerator.GenerateReport(input);

        return (
            <div className="sheet">
                <header>Foaie de parcurs</header>
                <table className="strong">
                    <tbody>
                        <tr>
                            <td>
                                {report.companyName}
                            </td>
                        </tr>
                        <tr>
                            <td>Auto:</td>
                            <td >
                                {report.vehiclePlate}
                            </td>
                        </tr>
                        <tr>
                            <td>Luna:</td>
                            <td >
                                {report.year}-{report.month}
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table className="itinerary">
                    <tbody>
                        <tr>
                            <th>Data</th>
                            <th>Locatie <br /> pornire</th>
                            <th>Locatie <br />sosire</th>
                            <th>Km <br />plecare</th>
                            <th>Km <br />sosire</th>
                            <th>Km <br />parcurs</th>
                            <th>Persoana</th>
                        </tr>
                        {
                            report.lines.map(line => (

                                <tr key={report.lines.indexOf(line)}>
                                    <td>{line.date.toLocaleDateString("ro-RO")}</td>
                                    <td>{line.fromLocation}</td>
                                    <td>{line.toLocation}</td>
                                    <td>{line.millageStart}</td>
                                    <td>{line.millageEnd}</td>
                                    <td>{line.distanceDriven}</td>
                                    <td>{input.driverName}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <table className="strong">
                    <tbody>
                        <tr>
                            <td>Total KM:</td>
                            <td>{report.totalDistanceDriven}</td>
                        </tr>
                        <tr>
                            <td>Total Carburant:</td>
                            <td>{report.totalBurnedFuel}</td>
                        </tr>
                        <tr>
                            <td>Zile Lucrate: </td>
                            <td>{report.totalDaysInOffice} / {report.totalWorkDays}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

