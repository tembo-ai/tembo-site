import "../assets/css/bootstrap.min.css";
import "../assets/css/icofont.min.css";
import "../assets/css/style.css";
import "../assets/css/responsive.css";
import "../assets/css/animate.css";

import { Provider } from "react-redux";
import App, { Container } from "next/app";
import withRedux from "next-redux-wrapper";
import { initStore } from "../store/reducers/cartReducer";
import { DefaultSeo } from "next-seo";
import GoTop from "../components/Shared/GoTop";

export default withRedux(initStore)(
	class MyApp extends App {
		static async getInitialProps({ Component, ctx }) {
			return {
				pageProps: Component.getInitialProps
					? await Component.getInitialProps(ctx)
					: {}
			};
		}

		render() {
			const { Component, pageProps, store } = this.props;

			return (
				<Container>
					<DefaultSeo
						title="Tembo AI"
						description="Tembo AI"
						openGraph={{
							type: "website",
							locale: "en_IE",
							url: "https://nextland-react.envytheme.com/",
							site_name: "Tembo AI"
						}}
					/>
					<Provider store={store}>
						<Component {...pageProps} />
					</Provider>
					<GoTop scrollStepInPx="50" />
				</Container>
			);
		}
	}
);
