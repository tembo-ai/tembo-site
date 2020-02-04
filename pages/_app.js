import "../assets/css/bootstrap.min.css";
import "../assets/css/icofont.min.css";
import "../assets/css/style.css";
import "../assets/css/responsive.css";
import "../assets/css/animate.css";

import App, { Container } from "next/app";
import { DefaultSeo } from "next-seo";
import GoTop from "../components/Contents/GoTop";

export default class MyApp extends App {
	static async getInitialProps({ Component, ctx }) {
		return {
			pageProps: Component.getInitialProps
				? await Component.getInitialProps(ctx)
				: {}
		};
	}

	render() {
		const { Component, pageProps } = this.props;

		return (
			<Container>
				<DefaultSeo
					title="Tembo AI"
					description="Tembo AI - Empowering individuals to protect their communities."
					openGraph={{
						type: "website",
						locale: "en_IE",
						url: "https://www.tembo.ai/",
						site_name: "Tembo AI"
					}}
				/>
				<Component {...pageProps} />
				<GoTop scrollStepInPx="50" />
			</Container>
		);
	}
}
