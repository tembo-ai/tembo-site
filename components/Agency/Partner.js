import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

class Partner extends React.Component {
	state = { display: false };

	componentDidMount() {
		this.setState({ display: true });
	}
	render() {
		return (
			<div className="partner-area startup-partner">
				<div className="container">
					<div className="section-title">
						<h2>Our Partners</h2>
						<div className="bar"></div>
					</div>
					<div className="row">
						<div className="col-lg-4">
							<div className="item">
								<Link href="#">
									<a>
										<img
											src={require("../../images/ideacenter.png")}
											alt="partner"
										/>
									</a>
								</Link>
							</div>
						</div>

						<div className="col-lg-4">
							<div className="item">
								<Link href="#">
									<a>
										<img
											src={require("../../images/harborlink.png")}
											alt="partner"
										/>
									</a>
								</Link>
							</div>
						</div>

						<div className="col-lg-4">
							<div className="item">
								<Link href="#">
									<a>
										<img
											src={require("../../images/garage.png")}
											alt="partner"
										/>
									</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Partner;
