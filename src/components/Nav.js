import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export class Nav extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <a className="navbar-brand" href="/"><b>Denydesigns.</b></a>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                <NavLink className="navlink mx-1 active" to="/">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink className="navlink mx-1" to="/Product_list">Products</NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink className="navlink mx-1" to="/Error">Collection</NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink className="navlink mx-1" to="/Error">Wholesale</NavLink>
                                </li>
                            </ul>
                            <div className="d-flex">
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-dark" type="submit"><i className="fa fa-search" aria-hidden="true"></i></button>
                            </form>
                            <NavLink className="navlink mx-3 user" to="/Login"><i className="fa fa-user-circle text-dark w-100 h-100" aria-hidden="true"></i></NavLink>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
