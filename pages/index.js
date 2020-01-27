import React from "react";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import Banner from "../components/Contents/Banner";
import Partner from "../components/Contents/Partner";
import Features from "../components/Contents/Features";
import Overview from "../components/Contents/Overview";
import Feedback from "../components/Contents/Feedback";
import Join from "../components/Contents/Join";
import Team from "../components/Contents/Team";
import Blog from "../components/Contents/Blog";
import Form from "../components/Contents/Form";
import Subscribe from "../components/Contents/Subscribe";

class Contents extends React.Component {
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
				<Form />
				<Subscribe id={"getstarted"} />
				<Footer />
			</React.Fragment>
		);
	}
}

export default Contents;
