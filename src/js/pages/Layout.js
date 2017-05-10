import React from "react";

import Footer from "./../components/Footer";

export default class Layout extends React.Component {
  render () {
    return (
      <div>
        <div class="container">
          {this.props.children}
        </div>
        <Footer title={"Other title"}/>
      </div>
    );
  }
}

