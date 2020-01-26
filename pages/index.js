import React from "react";
import Navbar from "../components/Layouts/Navbar";
import Footer from "../components/Layouts/Footer";
import Banner from "../components/Agency/Banner";
import Partner from "../components/Agency/Partner";
import Features from "../components/Agency/Features";
import Overview from "../components/Agency/Overview";
import Feedback from "../components/Agency/Feedback";
import Join from "../components/Agency/Join";
import Team from "../components/Agency/Team";
import Blog from "../components/Agency/Blog";
import Subscribe from "../components/Agency/Subscribe";

class Agency extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Navbar />
				<Banner />
				<Overview id="overview" />
				<Features id={"features"} />
				<Feedback />
				<Join />
				<Team id="team" />
				<Partner />
				<Blog id="blog" />
				<Subscribe id={"getstarted"} />
				<Footer />
			</React.Fragment>
		);
	}
}

export default Agency;
