import React from "react";

export default class Player extends React.Component {
  render () {
    const { name } = this.props;
    const mediaContentStyle = {
      "margin": "auto"
    };

    return (
      <div class="column is-one-quarter">
        <div class="box is-paddingless">
          <article class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img src="http://bulma.io/images/placeholders/48x48.png" alt="Image"></img>
              </figure>
            </div>
            <div class="media-content" style={mediaContentStyle}>
              <div class="content">
                <p>
                  <strong>{name}</strong>
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  }
}
