import React from "react";
import "./Spoiler.css";

class Spoiler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spoilerClosed: false,
      maxHeight: "0px"
    };
    this.toggleSpoiler = this.toggleSpoiler.bind(this);
    this.content = React.createRef(null);
  }

  toggleSpoiler() {
    this.setState({
      spoilerClosed: !this.state.spoilerClosed,
      maxHeight: !this.state.spoilerClosed ? this.props.maxHeight : "0px"
    });
  }

  render() {
    return (
      <div>
        <button className="spoilerHeader" onClick={this.toggleSpoiler}>
          <div
            className={
              "SpoilerTriangle " +
              (this.state.spoilerClosed ? "spoilerClosed" : "")
            }
          />
          <span>{this.props.headline}</span>
        </button>
        <div
          ref={this.content}
          style={{
            maxHeight: this.state.maxHeight,
            overflow: "auto",
            transition: "max-height 0.4s ease-in-out"
          }}
        >
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Spoiler;
