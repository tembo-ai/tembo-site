import React from "react";
import Link from "next/link";

class GetStarted extends React.Component {
	render() {
		return (
			<section className="get-started ptb-100">
				<div className="container">
					<div className="section-title">
						<h2>Join The Herd</h2>
						<div className="bar"></div>
						<p>
							Sign up with your email address to receive news and
							updates.
						</p>
					</div>

					<div className="get-started-form">
						<form>
							<div className="form-group">
								<input
									type="text"
									className="form-control"
									placeholder="First Name"
								/>
							</div>
							<div className="form-group">
								<input
									type="text"
									className="form-control"
									placeholder="Last Name"
								/>
							</div>
							<div className="form-group">
								<input
									type="email"
									className="form-control"
									placeholder="Email"
								/>
							</div>
							<button type="submit" className="btn btn-primary">
								Sign Up
							</button>
							<p>We respect your privacy.</p>
						</form>
					</div>
				</div>
			</section>
		);
	}
}

export default GetStarted;
