import React, { Component } from "react";
import Link from "next/link";

class Features extends Component {
	render() {
		return (
			<section className="features-area startup-features ptb-100">
				<div className="container">
					<div className="section-title">
						<h2>Our Solution</h2>
						<div className="bar"></div>
					</div>
					<div className="row text-center align-content-center">
						<div className="col-lg-4 col-md-6">
							<div className="single-features-box">
								<img
									src={require("../../images/platform.svg")}
									alt="image"
								/>
								<p>
									A novel hardware + software platform using
									proprietary sensors & machine learning…
								</p>
							</div>
						</div>

						<div className="col-lg-4 col-md-6">
							<div className="single-features-box">
								<img
									src={require("../../images/analyze.svg")}
									alt="image"
								/>
								<p>
									…to model and analyze human activity and
									crowd flow in real time…
								</p>
							</div>
						</div>

						<div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
							<div className="single-features-box">
								<img
									src={require("../../images/protect.svg")}
									alt="image"
								/>
								<p>
									…in order to protect high schools, stadiums,
									and large corporate offices.
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className="features-inner-area">
					<div className="container">
						<div className="row h-100 justify-content-center align-items-center">
							<div className="col-lg-6 col-md-12">
								<div className="features-image">
									<img
										src={require("../../images/solution.png")}
										alt="image"
									/>
								</div>
							</div>
							<div className="col-lg-6 col-md-12">
								<div className="features-inner-content">
									<div className="features-item">
										<div className="icon">
											<i className="icofont-people"></i>
										</div>
										<h3>Real-Time Big Data</h3>
										<p>
											Display the quantity and locations
											of people across a given building,
											stadium, or campus.
										</p>
									</div>

									<div className="features-item">
										<div className="icon">
											<i className="icofont-warning"></i>
										</div>
										<h3>Smart Alerts</h3>
										<p>
											Generate alerts for any unusual
											movements or activity, especially
											those indicating security threats
										</p>
									</div>

									<div className="features-item">
										<div className="icon">
											<i className="icofont-location-arrow"></i>
										</div>
										<h3>Actionable Directions</h3>
										<p>
											Provide constantly-updating
											wayfinding directions to the
											location of the security threat
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Features;
