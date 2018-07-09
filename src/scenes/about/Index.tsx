import * as React from 'react';
import NavMenu from '../../components/NavMenu';

class Index extends React.Component {
  public render() {
    return (
      <div className='container container-narrow'>
        <NavMenu />
        <div className='row'>
          <div className='col-md-12'>
            about
        </div>
        </div>
      </div>
    );
  }
}

export default Index;
