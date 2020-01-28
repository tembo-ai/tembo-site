import React, { Component } from "react";

class Intention extends Component {
	render() {
		return (
			<section className="overview-section ptb-100">
				<div className="container">
					<div className="section-title">
						<h2>Our Intention</h2>
						<div className="bar"></div>
					</div>
					<div className="overview-box">
						<div className="row h-100 justify-content-center align-items-center">
							<div className="col-lg-6 col-md-6 overview-img">
								<img
									src={require("../../images/school.svg")}
									alt="image"
								/>
							</div>

							<div className="col-lg-6 col-md-6 overview-content">
								<div className="icon">
									<i className="icofont-school-bag"></i>
								</div>
								<h3>Schools</h3>
								<p>
									Keep the students and staff at your school
									safe with our comprehensive security
									solution. Monitor crowd flow and be able to
									locate all students at a time of need. Get
									alerts for unusual activity and potential
									threats.
								</p>
							</div>
						</div>
					</div>

					<div className="overview-box">
						<div className="row h-100 justify-content-center align-items-center">
							<div className="col-lg-6 col-md-6 overview-content">
								<div className="icon">
									<i className="icofont-match-review"></i>
								</div>
								<h3>Stadiums</h3>
								<p>
									Focus on the game and know that Tembo is
									watching in the background. Monitor crowds
									of people as they enter and exit the stadium
									and get alerted for any unusual activity.
								</p>
							</div>

							<div className="col-lg-6 col-md-6 overview-img">
								<img
									src={require("../../images/stadium.svg")}
									alt="image"
								/>
							</div>
						</div>
					</div>

					<div className="overview-box">
						<div className="row h-100 justify-content-center align-items-center">
							<div className="col-lg-6 col-md-6 overview-img">
								<img
									src={require("../../images/office.svg")}
									alt="image"
								/>
							</div>

							<div className="col-lg-6 col-md-6 overview-content">
								<div className="icon">
									<i className="icofont-presentation"></i>
								</div>
								<h3>Offices</h3>
								<p>
									Have full oversight of activity and
									movements within your building. Get alerts
									for unusual activity and potential threats.
									Track visitors through the building and
									ensure that they aren’t threats.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Intention;
