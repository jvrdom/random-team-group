import React from "react";
import { Link } from "react-router";

import Nav from "./../components/Nav";
import Footer from "./../components/Footer";

export default class Layout extends React.Component {
	render() {
		const { location } = this.props;
		const containerStyle = {
			marginTop: "60px"
		};

		return (
			<div>
				<Nav location={location} />
				<div class="container" style={containerStyle}>
					<div class="row">
						<div class="col-lg-12">
							<h1>Javier Dominguez</h1>
							{this.props.children}
						</div>
					</div>
					<Footer title={"Other title"}/>
				</div>
			</div>
		);
	}
}
