import React, { Component } from "react";
import Particles from "react-particles-js";

class Banner extends Component {
	render() {
		return (
			<section className="page-title-banner">
				<Particles
					params={{
						particles: {
							number: {
								value: 25
							},
							size: {
								value: 3
							}
						},
						interactivity: {
							events: {
								onhover: {
									enable: true,
									mode: "repulse"
								},
								onclick: {
									enable: true,
									mode: "push"
								}
							}
						}
					}}
					style={{
						width: "100%",
						backgroundColor: "#3e0f5e",
						position: "absolute",
						top: "0",
						left: "0"
					}}
				/>
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<h2>Error</h2>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Banner;
