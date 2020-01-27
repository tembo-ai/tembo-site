import React, { Component } from "react";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel3"));

class Feedback extends Component {
	state = { display: false };

	componentDidMount() {
		this.setState({ display: true });
	}
	render() {
		return (
			<section className="feedback-area pt-100 pb-50">
				<div className="container">
					<div className="section-title">
						<h2>Our Mission</h2>
						<div className="bar"></div>
					</div>

					<div className="row">
						<div className="col-lg-12">
							<div className="single-feedback-box">
								<div className="client-info">
									<img
										src={require("../../images/anandShah.png")}
										alt="client"
									/>
									<h3>Anand Kiran Shah</h3>
									<span>Founder & CEO</span>
								</div>
								<p>
									I was living in London in 2017 during four
									of its bloodiest months in recent history.
									Over the course of three terror attacks, 35
									people were killed. After those attacks, I
									saw a change come over the mood in London.
									Not only was it people grieving together,{" "}
									<strong>
										I saw a people who would do anything to
										keep each other safe.
									</strong>
								</p>
								<p>
									Later, in February 2018, I saw similar
									sentiments emerge in the Parkland community
									after the fatal school shooting there –
									individuals who would do everything to
									protect each other and their communities,
									kids who are still fighting for changes in
									legislation.
								</p>
								<p>
									<strong>
										Tembo is founded on the mission to
										empower individuals to protect each
										other and their communities.
									</strong>{" "}
									We are a tech generation that cannot wait
									for legislation to protect us. We want to
									bring everyone together in achieving our
									mission, and we have a plan on how to do so.
									For now, in this first step, we would like
									to ask for your support. Will you help us
									protect one another?
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Feedback;
