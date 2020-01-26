import React, { Component } from "react";

class Subscribe extends Component {
	render() {
		return (
			<section className="subscribe-area ptb-100">
				<div className="container">
					<div className="section-title">
						<h2>Join The Herd</h2>
						<div className="bar"></div>
						<p>
							Sign up to receive news and updates. Don't worry, we
							value your privacy.
						</p>
					</div>

					<form className="newsletter-form" data-toggle="validator">
						<input
							type="email"
							className="form-control"
							placeholder="Your Email Address"
							name="EMAIL"
							required={true}
							autoComplete="off"
						/>
						<button className="btn btn-primary" type="submit">
							Subscribe
						</button>
						<div
							id="validator-newsletter"
							className="form-result"
						></div>
					</form>
				</div>
			</section>
		);
	}
}

export default Subscribe;
