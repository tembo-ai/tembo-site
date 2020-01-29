import React, { PureComponent } from "react";

export default class CityInfo extends PureComponent {
	render() {
		const { info } = this.props;
		const displayName = `${info.city}, ${info.state}`;

		return (
			<div>
				<div>
					<a target="_new" href={`https://ideacenter.nd.edu/`}>
						IDEA Center
					</a>
					, {displayName}
				</div>
				<img width={240} src={info.image} />
			</div>
		);
	}
}
