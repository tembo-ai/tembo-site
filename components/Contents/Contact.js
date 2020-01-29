import React, { Component } from "react";
import Form from "./Form";
import Map from "../Map/Map";

class Contact extends Component {
	render() {
		return (
			<section className="contact-area ptb-100">
				<div className="container">
					<div className="section-title">
						<h2>Contact Us</h2>
						<div className="bar"></div>
					</div>

					<div className="row h-100 justify-content-center align-items-center">
						<div className="col-lg-6 col-md-12">
							<Map />
						</div>

						<div className="col-lg-6 col-md-12">
							<Form />
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Contact;
