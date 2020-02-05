import { initGA, logPageView } from "../../utils/Analytics";
import { TinyButton as ScrollUpButton } from "react-scroll-up-button";

class Layout extends React.Component {
	componentDidMount() {
		if (!window.GA_INITIALIZED) {
			initGA();
			window.GA_INITIALIZED = true;
		}
		logPageView();
	}
	render() {
		return (
			<div>
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
				{this.props.children}
				<ScrollUpButton ContainerClassName="back-to-top rounded text-center" />
			</div>
		);
	}
}

export default Layout;
