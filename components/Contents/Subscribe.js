import React, { Component } from "react";
import SubscribeForm from "./SubscribeForm";

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

					<SubscribeForm />
				</div>
			</section>
		);
	}
}

export default Subscribe;
