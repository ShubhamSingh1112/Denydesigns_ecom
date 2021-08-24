import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export class Register extends Component {
    render() {
        return (
            <div>
                <div className="d-flex justify-content-center align-items-center vh">
                    <form className="card p-5 w-50">

                        <h1 className="h3 mb-3 fw-normal"><b>Sign Up</b></h1>

                        <div className="form-floating">
                            <input type="text" className="form-control" id="floatingName" placeholder="Name" required />
                            <label for="floatingName">Full Name</label>
                        </div>
                        <br />

                        <div className="form-floating">
                            <input type="email" className="form-control" id="floatingInput" placeholder="Email" required />
                            <label for="floatingInput">Email address</label>
                        </div>
                        <br />

                        <div className="form-floating">
                            <input type="number" maxLength="10" className="form-control" id="floatingNumber" placeholder="Number" required />
                            <label for="floatingNumber">Phone/Mobile no.</label>
                        </div>
                        <br />

                        <div className="form-floating">
                            <input type="text" className="form-control" id="floatingAddress" placeholder="Number" required />
                            <label for="floatingPassword">Full Address(with pincode)</label>
                        </div>
                        <br />

                        <div className="form-floating">
                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" required />
                            <label for="floatingPassword">Password</label>
                        </div>
                        <br />


                        <center>
                            <button className="w-25 btn btn-lg btn-primary mb-3" type="submit">Sign Up</button>
                        </center>

                        <p className="text-center lead">Already have an account? <NavLink className="navlink" to="Login">Sign In</NavLink></p>
                    </form>
                </div>
            </div>
        )
    }
}
