import "../assets/css/bootstrap.min.css";
import "../assets/css/icofont.min.css";
import "../assets/css/style.css";
import "../assets/css/responsive.css";
import "../assets/css/animate.css";

import App, { Container } from "next/app";
import { DefaultSeo } from "next-seo";

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
				<div id="pageLoader">
					<div id="preloader">
						<div id="status">
							<div className="spinner">
								<div className="double-bounce1"></div>
								<div className="double-bounce2"></div>
							</div>
						</div>
					</div>
				</div>
				<Component {...pageProps} />
			</Container>
		);
	}
}
