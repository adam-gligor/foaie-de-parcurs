import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import * as Yup from 'yup';
import NavMenu from '../../components/NavMenu';
import dataStore from '../../report-generator/DataStore';
import IReportInput from '../../report-generator/IReportInput';


// use typeError to set a message for typecast errors
const ValidationSchema = Yup.object().shape({
  companyName: Yup.string().required(),
  daysOff: Yup.string().matches(/^[0-9.,]+$/, { excludeEmptyString: true }),
  driverName: Yup.string().required(),
  homeAddress: Yup.string().required(),
  month: Yup.number().required().integer().positive(),
  tripDistance: Yup.number().required().integer().positive(),
  vehicleEndMileage: Yup.number().required().integer().positive(),
  vehiclePlate: Yup.string().required(),
  vehicleStartMileage: Yup.number().required().integer().positive(),
  workAddress: Yup.string().required(),
  year: Yup.number().required().integer().positive()
});

export interface IState {
  input: IReportInput;
  invalidFields: string[]
}

export default class Index extends React.Component<RouteComponentProps<{}>, IState> {

  constructor(props: RouteComponentProps<{}>) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      input: dataStore.load(),
      invalidFields: []
    }
  }

  public render() {
    return (
      <div className='container container-narrow'>
        <NavMenu />
        <div className='row'>
          <div className='col-md-12'>

            <form method='post' id='inputForm' onSubmit={this.handleSubmit}>
              <div className='form-group row'>
                <label className='col-sm-3 col-form-label'>Anul</label>
                <div className='col-sm-9'>
                  <input
                    type='text'
                    className={'form-control ' + (this.state.invalidFields.indexOf('year') !== -1 ? 'is-invalid' : '')}
                    id='year'
                    name='year'
                    placeholder='Anul (ex: 2018)'
                    value={this.state.input.year}
                    onChange={this.handleChange}
                  />
                  <div className='invalid-feedback'>
                    Anul (ex: 2018)
                  </div>
                </div>
              </div>

              <div className='form-group row'>
                <label className='col-sm-3 col-form-label'>Luna</label>
                <div className='col-sm-9'>
                  <input
                    type='text'
                    className={'form-control ' + (this.state.invalidFields.indexOf('month') !== -1 ? 'is-invalid' : '')}
                    id='month'
                    name='month'
                    placeholder='Luna (ex: 10)'
                    value={this.state.input.month}
                    onChange={this.handleChange}
                  />
                  <div className='invalid-feedback'>
                    Luna (ex: 10)
                  </div>
                </div>
              </div>

              <div className='form-group row'>
                <label className='col-sm-3 col-form-label'>Zile libere</label>
                <div className='col-sm-9'>
                  <input
                    type='text'
                    className={'form-control ' + (this.state.invalidFields.indexOf('daysOff') !== -1 ? 'is-invalid' : '')}
                    id='daysOff'
                    name='daysOff'
                    placeholder='Zile libere (ex: 1,2,31)'
                    onChange={this.handleChange}
                    value={this.state.input.daysOff}
                  />
                  <div className='invalid-feedback'>
                    Zile libere (ex: 1,2,31)
                  </div>
                </div>
              </div>

              <div className='form-group row'>
                <label className='col-sm-3 col-form-label'>Kilometraj inceput</label>
                <div className='col-sm-9'>
                  <input
                    type='text'
                    className={'form-control ' + (this.state.invalidFields.indexOf('vehicleStartMileage') !== -1 ? 'is-invalid' : '')}
                    id='vehicleStartMileage'
                    name='vehicleStartMileage'
                    placeholder='Kilometraj inceput luna in km (ex: 100123)'
                    value={this.state.input.vehicleStartMileage}
                    onChange={this.handleChange}
                  />
                  <div className='invalid-feedback'>
                    Kilometraj inceput luna in km (ex: 100123)
                  </div>
                </div>
              </div>

              <div className='form-group row'>
                <label className='col-sm-3 col-form-label'>Kilometraj sfarsit</label>
                <div className='col-sm-9'>
                  <input
                    type='text'
                    className={'form-control ' + (this.state.invalidFields.indexOf('vehicleEndMileage') !== -1 ? 'is-invalid' : '')}
                    id='vehicleEndMileage'
                    name='vehicleEndMileage'
                    value={this.state.input.vehicleEndMileage}
                    placeholder='Kilometraj sfarsit luna in km (ex: 100987)'
                    onChange={this.handleChange}
                  />
                  <div className='invalid-feedback'>
                    Kilometraj sfarsit luna in km (ex: 100987) 
                  </div>
                </div>
              </div>

              <hr />

              <div className='form-group row'>
                <label className='col-sm-3 col-form-label'>Adresa acasa</label>
                <div className='col-sm-9'>
                  <input
                    type='text'
                    className={'form-control ' + (this.state.invalidFields.indexOf('homeAddress') !== -1 ? 'is-invalid' : '')}
                    id='homeAddress'
                    name='homeAddress'
                    placeholder='Adresa de acasa (ex: str Decebal 12, Cluj-Napoca)'
                    value={this.state.input.homeAddress}
                    onChange={this.handleChange}
                  />
                  <div className='invalid-feedback'>
                    Adresa de acasa (ex: str Decebal 12, Cluj-Napoca)
                  </div>
                </div>
              </div>

              <div className='form-group row'>
                <label className='col-sm-3 col-form-label'>Adresa servici</label>
                <div className='col-sm-9'>
                  <input
                    type='text'
                    className={'form-control ' + (this.state.invalidFields.indexOf('workAddress') !== -1 ? 'is-invalid' : '')}
                    id='workAddress'
                    name='workAddress'
                    placeholder='Adresa de servici (ex: str Garii 71, Cluj-Napoca)'
                    value={this.state.input.workAddress}
                    onChange={this.handleChange}
                  />
                  <div className='invalid-feedback'>
                    Adresa de servici (ex: str Garii 71, Cluj-Napoca)
                  </div>
                </div>
              </div>

              <div className='form-group row'>
                <label className='col-sm-3 col-form-label'>Distanta (km)</label>
                <div className='col-sm-9'>
                  <input
                    type='text'
                    className={'form-control ' + (this.state.invalidFields.indexOf('tripDistance') !== -1 ? 'is-invalid' : '')}
                    id='tripDistance'
                    name='tripDistance'
                    placeholder='Distanta intre adrese in km (ex: 10)'
                    value={this.state.input.tripDistance}
                    onChange={this.handleChange}
                  />
                  <div className='invalid-feedback'>
                    Distanta intre adrese in km (ex: 10)
                  </div>
                </div>
              </div>

              <div className='form-group row'>
                <label className='col-sm-3 col-form-label'>Numar vehicul</label>
                <div className='col-sm-9'>
                  <input
                    type='text'
                    className={'form-control ' + (this.state.invalidFields.indexOf('vehiclePlate') !== -1 ? 'is-invalid' : '')}
                    id='vehiclePlate'
                    name='vehiclePlate'
                    placeholder='Numar inmatriculare (ex: CJ-15-QWE)'
                    value={this.state.input.vehiclePlate}
                    onChange={this.handleChange}
                  />
                  <div className='invalid-feedback'>
                    Numar inmatriculare (ex: CJ-15-QWE)
                  </div>
                </div>
              </div>

              <div className='form-group row'>
                <label className='col-sm-3 col-form-label'>Nume delegat</label>
                <div className='col-sm-9'>
                  <input
                    type='text'
                    className={'form-control ' + (this.state.invalidFields.indexOf('driverName') !== -1 ? 'is-invalid' : '')}
                    id='driverName'
                    name='driverName'
                    placeholder='Nume sofer (ex: Cici Ionel)'
                    value={this.state.input.driverName}
                    onChange={this.handleChange}
                  />
                  <div className='invalid-feedback'>
                    Nume sofer (ex: Cici Ionel)
                  </div>
                </div>
              </div>

              <div className='form-group row'>
                <label className='col-sm-3 col-form-label'>Nume firma</label>
                <div className='col-sm-9'>
                  <input
                    type='text'
                    className={'form-control ' + (this.state.invalidFields.indexOf('companyName') !== -1 ? 'is-invalid' : '')}
                    id='companyName'
                    name='companyName'
                    placeholder='Nume firma (ex: NetMatch srl)'
                    value={this.state.input.companyName}
                    onChange={this.handleChange}
                  />
                  <div className='invalid-feedback'>
                    Nume firma (ex: NetMatch srl)
                  </div>
                </div>
              </div>

              <div className='d-flex justify-content-center'>
                <input type='submit' value='Genereaza' className='btn btn-primary' />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

  private handleSubmit(event: React.FormEvent<HTMLFormElement>) {

    event.preventDefault();

    ValidationSchema.validate(this.state.input, { abortEarly: false })
      .then((value: IReportInput) => {

        // includes cast to schema types 
        dataStore.save(value);
        this.props.history.push('/report');
      })
      .catch((err: Yup.ValidationError) => {
        this.setState({ invalidFields: err.inner.map(e => e.path) });
      })

  }

  private handleChange(e: React.SyntheticEvent<HTMLInputElement>) {

    const change: any = {}
    change[e.currentTarget.name] = e.currentTarget.value;

    const newInput = Object.assign({}, this.state.input, change);

    this.setState({ input: newInput });
  }

}
