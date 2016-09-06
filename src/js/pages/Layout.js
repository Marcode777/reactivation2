import React from "react";
import {Link} from "react-router";

export default class Layout extends React.Component {
  navigate(){
    console.log(this.props);
    this.props.history.replaceState(null, "/");
  }
  render() {
    return (
      <div>
        <h1>Killer(?) News</h1>
        {this.props.children}
        <Link to="archives"><button class="btn btn-primary">archives</button></Link>
        <Link to="settings"><button class="btn btn-primary">settings</button></Link>
        <button onClick={this.navigate.bind(this)}>featured</button>
      </div>
      );
  }
}

// there are a few notes on the console : browser.js:49 Warning: [react-router] `props.history` and `context.history` are deprecated. Please use `context.router`
// more notes on the console: browser.js:49 Warning: [history] replaceState is deprecated; use replace instead