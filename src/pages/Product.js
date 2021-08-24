import React, { Component } from 'react';
import { Productcarousel } from '../components/Productcarousel';
import { Productdetails } from '../components/Productdetails';

export class Product extends Component {
    render() {
        return (
            <div>
                <div className="row">
                <div className="col-md-7 col-sm-12 col-xs-12">
                <Productcarousel/>
                </div>
                <div className="col-md-5 col-sm-12 col-xs-12">
                    <Productdetails/>
                </div>
                </div>
                

            </div>
        )
    }
}
