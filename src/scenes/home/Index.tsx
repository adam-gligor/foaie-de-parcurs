import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import NavMenu from '../../components/NavMenu';
import dataStore from '../../report-generator/DataStore';
import IReportInput from '../../report-generator/IReportInput';

export interface IState {
  input: IReportInput;
}

export default class Index extends React.Component<RouteComponentProps<{}>, IState> {

  constructor(props: RouteComponentProps<{}>) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      input: dataStore.load()
    }
  }

  public render() {
    return (
      <div className='container container-narrow'>
        <NavMenu />
        <div className='row'>
          <div className='col-md-12'>

            <form method="post" id="inputForm" onSubmit={this.handleSubmit}>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Anul</label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    id="year"
                    name="year"
                    placeholder="Anul (ex: 2018)"
                    value={this.state.input.year}
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Luna</label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    id="month"
                    name="month"
                    placeholder="Luna (ex: 10)"
                    value={this.state.input.month}
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Zile libere</label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    id="daysOff"
                    name="daysOff"
                    placeholder="Zile libere (ex: 1,2,31)"
                    onChange={this.handleChange}
                    value={this.state.input.daysOff}
                  />
                </div>
              </div>

              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Kilometraj inceput</label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    id="vehicleStartMileage"
                    name="vehicleStartMileage"
                    placeholder="Kilometraj inceput luna (ex: 100123)"
                    value={this.state.input.vehicleStartMileage}
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Kilometraj sfarsit</label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    id="vehicleEndMileage"
                    name="vehicleEndMileage"
                    value={this.state.input.vehicleEndMileage}
                    placeholder="Kilometraj sfarsit luna (ex: 100987)"
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              <hr />

              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Adresa acasa</label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    id="homeAddress"
                    name="homeAddress"
                    placeholder="Adresa de acasa (ex: str Decebal 12, Cluj-Napoca)"
                    value={this.state.input.homeAddress}
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Adresa servici</label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    id="workAddress"
                    name="workAddress"
                    placeholder="Adresa de servici (ex: str Garii 71, Cluj-Napoca)"
                    value={this.state.input.workAddress}
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Distanta (km)</label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    id="tripDistance"
                    name="tripDistance"
                    placeholder="Distanta intre adrese in km (ex: 10)"
                    value={this.state.input.tripDistance}
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Numar vehicul</label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    id="vehiclePlate"
                    name="vehiclePlate"
                    placeholder="Numar inmatriculare (ex: CJ-15-QWE)"
                    value={this.state.input.vehiclePlate}
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Nume delegat</label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    id="driverName"
                    name="driverName"
                    placeholder="Nume sofer (ex: John Doe)"
                    value={this.state.input.driverName}
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Nume firma</label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    id="companyName"
                    name="companyName"
                    placeholder="Nume forma (ex: foo)"
                    value={this.state.input.companyName}
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              <div className="d-flex justify-content-center">
                <input type="submit" value="Genereaza" className="btn btn-primary" />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

  private handleSubmit(event: React.FormEvent<HTMLFormElement>) {

    event.preventDefault();
    dataStore.save(this.state.input);
    this.props.history.push('/report');

  }

  private handleChange(e: React.SyntheticEvent<HTMLInputElement>) {

    const change: any = {}
    change[e.currentTarget.name] = e.currentTarget.value;

    const newInput = Object.assign({}, this.state.input, change);

    this.setState({ input: newInput });
  }

}
