import React, { Component } from 'react';
import '../App.css';

export class Productdetails extends Component {
    render() {
        return (
            <div className="p-5">
                <h2 className="product_heading">Nike Air Presto (Red)</h2>
                <p className="description">This is the best product out out there right now. The shoes are light weight and very comfortable to wear.</p>
                <form className="product">
                    <div className="form-group mb-3">
                    <label>Quantity</label>{' '}<input type="text" className="form-control" name="quantity" value={1} placeholder="Quantity" />
                    </div>

                    <div className="form-group mb-3">
                    <label>Color</label>{' '}
                    <select className="form-select">
                        <option value="Red" selected>Red</option>
                        <option value="Blue">Blue</option>
                        <option value="Black">Black</option>
                    </select>
                    </div>
                    <div className="form-group mb-3">
                    <label>Size</label>{' '}
                    <select className="form-select">
                        <option value="7">7</option>
                        <option value="8" selected>8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                    </div>
                    <div className="form-group mb-3">
                        <button className="btn btn-lg btn-primary text-light">Buy Now</button>
                    </div>
                </form>
            </div>
        )
    }
}
