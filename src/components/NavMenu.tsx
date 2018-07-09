import * as React from 'react';
import { NavLink } from 'react-router-dom';

export default class NavMenu extends React.Component<{}, {}> {
    public render() {
        return (
            <div className="header mb-5 pb-3">
                <nav>
                    <ul className="nav nav-pills float-right">
                        <li className="nav-item">
                            {/* <a className="nav-link" href="#">Acasa <span className="sr-only">(current)</span></a> */}
                            <NavLink to={'/'} exact={true} activeClassName='active' className="nav-item nav-link">
                                Acasa
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            {/* <a className="nav-link" href="#">Despre</a> */}
                            <NavLink to={'/about'} exact={true} activeClassName='active' className="nav-item nav-link">
                                Despre
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <h3 className="text-muted">Foaie de parcurs</h3>
            </div>

            // <nav className="navbar navbar-expand-lg navbar-light bg-light">            
            //     <a className="navbar-brand" href="#">Foaie de parcurs</a>
            //     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            //         <span className="navbar-toggler-icon"/>
            //     </button>
            //     <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            //         <div className="navbar-nav">
            //             <NavLink to={'/'} exact={true} activeClassName='active' className="nav-item nav-link">
            //                 Acasa
            //             </NavLink>
            //             <NavLink to={'/fetchdata'} exact={true} activeClassName='active' className="nav-item nav-link">
            //                 Despre
            //             </NavLink>
            //         </div>
            //     </div>
            // </nav>
        );
    }
}
