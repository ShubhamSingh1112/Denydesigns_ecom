import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export class Login extends Component {
    render() {
        return (
            <div>
                <div className="d-flex justify-content-center align-items-center vh">
                <form className="card p-5 w-50 shadow p-3 mb-5 bg-body rounded">

                    <h1 className="h3 mb-3 fw-normal"><b>Sign Up</b></h1>

                    <div className="form-floating">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label for="floatingInput">Email address</label>
                    </div>
                    <br/>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                        <label for="floatingPassword">Password</label>
                    </div>
                    <br/>
                    <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me" /> Remember me
                        </label>
                    </div>
                    <center>
                    <button className="w-25 btn btn-lg btn-primary mb-3" type="submit">Sign in</button>
                    </center>
                    
                    <p className="text-center lead">Don't have an account? <NavLink className="navlink" to="Register">Create New</NavLink></p>
                </form>
            </div>
            </div>
        )
    }
}
