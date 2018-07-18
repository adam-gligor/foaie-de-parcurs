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
                <h3 className="text-muted">Generator foaie de parcurs</h3>
            </div>
        );
    }
}
