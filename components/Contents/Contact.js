import React, { Component } from "react";
import Form from "./Form";

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
							<img
								src={require("../../images/contact.svg")}
								alt="image"
							/>
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
