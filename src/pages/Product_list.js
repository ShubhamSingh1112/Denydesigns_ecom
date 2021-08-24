import React, { Component } from 'react';
import product1 from '../images/p1.jpg';
import product2 from '../images/p2.jpg';
import product3 from '../images/p3.jpeg';
import product4 from '../images/p4.jpg';
import product5 from '../images/p5.jpg';
import product6 from '../images/p6.jpg';
import banner from '../images/banner.png';

import { NavLink } from 'react-router-dom';

export class Product_list extends Component {
    render() {
        return (
            <div className="album py-5 bg-light">
                <div className="container">
                    <div className="banner">
                        <img className="w-100" src={banner} />
                    </div>
                    <div className="row my-5">
                        <div className="col-md-4 col-sm-4 col-xs-12">
                            <div className="card mb-3 shadow-sm">
                                <img src={product1} />

                                <div className="card-body">
                                    <p className="card-text">هذه بطاقة أوسع مع نص داعم أدناه كمقدمة طبيعية لمحتوى إضافي. هذا المحتوى أطول قليلاً.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-outline-info"><NavLink className="navlink mx-1" to="/Product">Details</NavLink></button>
                                            <button type="button" className="btn btn-sm btn-outline-primary">Buy Now</button>
                                        </div>
                                        <small className="text-muted">₹ 3,899</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-12">
                            <div className="card mb-3 shadow-sm">
                            <img src={product2} />
                                <div className="card-body">
                                    <p className="card-text">هذه بطاقة أوسع مع نص داعم أدناه كمقدمة طبيعية لمحتوى إضافي. هذا المحتوى أطول قليلاً.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-outline-info">Details</button>
                                            <button type="button" className="btn btn-sm btn-outline-primary">Buy Now</button>
                                        </div>
                                        <small className="text-muted">₹ 3,899</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-12">
                            <div className="card mb-3 shadow-sm">
                            <img src={product3} />
                                <div className="card-body">
                                    <p className="card-text">هذه بطاقة أوسع مع نص داعم أدناه كمقدمة طبيعية لمحتوى إضافي. هذا المحتوى أطول قليلاً.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-outline-info">Details</button>
                                            <button type="button" className="btn btn-sm btn-outline-primary">Buy Now</button>
                                        </div>
                                        <small className="text-muted">₹ 3,899</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-12">
                            <div className="card mb-3 shadow-sm">
                            <img src={product4} />
                                <div className="card-body">
                                    <p className="card-text">هذه بطاقة أوسع مع نص داعم أدناه كمقدمة طبيعية لمحتوى إضافي. هذا المحتوى أطول قليلاً.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-outline-info">Details</button>
                                            <button type="button" className="btn btn-sm btn-outline-primary">Buy Now</button>
                                        </div>
                                        <small className="text-muted">₹ 3,899</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-12">
                            <div className="card mb-3 shadow-sm">
                            <img src={product5} />
                                <div className="card-body">
                                    <p className="card-text">هذه بطاقة أوسع مع نص داعم أدناه كمقدمة طبيعية لمحتوى إضافي. هذا المحتوى أطول قليلاً.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-outline-info">Details</button>
                                            <button type="button" className="btn btn-sm btn-outline-primary">Buy Now</button>
                                        </div>
                                        <small className="text-muted">₹ 3,899</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-12">
                            <div className="card mb-3 shadow-sm">
                            <img src={product6} />
                                <div className="card-body">
                                    <p className="card-text">هذه بطاقة أوسع مع نص داعم أدناه كمقدمة طبيعية لمحتوى إضافي. هذا المحتوى أطول قليلاً.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-outline-info">Details</button>
                                            <button type="button" className="btn btn-sm btn-outline-primary">Buy Now</button>
                                        </div>
                                        <small className="text-muted">₹ 3,899</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
