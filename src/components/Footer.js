import React, { Component } from 'react';
import '../App.css';

export class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="container py-5">
  <div className="row">
    <div className="col-12 col-md">
      <blockquote><b>DenyDesigns</b></blockquote>
      <small className="d-block mb-3 text-muted">&copy; 2021</small>
    </div>
    <div className="col-6 col-md">
      <h5>Features</h5>
      <ul className="list-unstyled text-small">
        <li><a className="link-secondary" href="/">Cool stuff</a></li>
        <li><a className="link-secondary" href="/">Random feature</a></li>
        <li><a className="link-secondary" href="/">Team feature</a></li>
        <li><a className="link-secondary" href="/">Stuff for developers</a></li>
        <li><a className="link-secondary" href="/">Another one</a></li>
        <li><a className="link-secondary" href="/">Last time</a></li>
      </ul>
    </div>
    <div className="col-6 col-md">
      <h5>Resources</h5>
      <ul className="list-unstyled text-small">
        <li><a className="link-secondary" href="/"><i class="fa fa-facebook" aria-hidden="true"></i>Facebook</a></li>
        <li><a className="link-secondary" href="/"><i class="fa fa-twitter" aria-hidden="true"></i>Twitter</a></li>
        <li><a className="link-secondary" href="/"><i class="fa fa-instagram" aria-hidden="true"></i>Instagram</a></li>
        <li><a className="link-secondary" href="/"><i className="fa fa-youtube" aria-hidden="true"></i>Youtube</a></li>
      </ul>
    </div>
    <div className="col-6 col-md">
      <h5>Resources</h5>
      <ul className="list-unstyled text-small">
        <li><a className="link-secondary" href="/">Business</a></li>
        <li><a className="link-secondary" href="/">Education</a></li>
        <li><a className="link-secondary" href="/">Government</a></li>
        <li><a className="link-secondary" href="/">Gaming</a></li>
      </ul>
    </div>
    <div className="col-6 col-md">
      <h5>About</h5>
      <ul className="list-unstyled text-small">
        <li><a className="link-secondary" href="/">Team</a></li>
        <li><a className="link-secondary" href="/">Locations</a></li>
        <li><a className="link-secondary" href="/">Privacy</a></li>
        <li><a className="link-secondary" href="/">Terms</a></li>
      </ul>
    </div>
  </div>
</footer>

            </div>
        )
    }
}
