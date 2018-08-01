import * as React from 'react';
import NavMenu from '../../components/NavMenu';

class Index extends React.Component {
  public render() {
    return (
      <div className='container container-narrow'>
        <NavMenu />
        <div className='row'>
          <div className='col-md-12'>
            <h4>
              Despre
            </h4>
            <p>
              Generator foaie de parcurs pentru scenariul in care masina personala este folosita pentru deplasare zilnica casa-servici.
            </p>
            Programul face urmatoarele presupuneri
            <br />
            <ul>
              <li>Perioada de o luna</li>
              <li>Un singur drum dus/intors pe zi intre casa si servici</li>
              <li>Zilele libere si weekendurile se exclud</li>
              <li>Kilometrii parcursi in alt scop se impart uniform intre zilele libere si weekenduri</li>
              <li>La calcul se foloseste un consum de 7.5l/100km</li>
            </ul>
            <h4>
              Instructiuni
            </h4>
            <p>
              Completeaza formularul de pe prima pagina. Printeaza foaia din browser.
            </p>
            <h4>
              Contact
            </h4>
            Raporteaza o problema <a href="https://github.com/adam-gligor/foaie-de-parcurs/issues">aici</a>
            <br />
            Istoric schimbari <a href="https://github.com/adam-gligor/foaie-de-parcurs/releases">aici</a>



          </div>
        </div>
      </div >
    );
  }
}

export default Index;
