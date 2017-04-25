import React from "react";
import { Link } from "react-router";

import Footer from "./../components/Footer";

export default class Layout extends React.Component {
	render() {
		const { location } = this.props;

		return (
			<div>
				<div class="container">
					<div class="row">
						<div class="col-lg-12">
							{this.props.children}
						</div>
					</div>
					<Footer title={"Other title"}/>
				</div>
			</div>
		);
	}
}
