import React from "react";
import "./styles.css";
import Spoiler from "./Spoiler";

export default function App() {
  return (
    <div className="App">
      <h1>Easy-Spoiler-React</h1>
      <h2>A dead simple way to create accessible Spoilers in React.</h2>
      <Spoiler headline="Show full text" maxHeight="350px">
        <p>Do you like lots of text?</p>
        <p>Do you like lots of text?</p>
        <p>Do you like lots of text?</p>
        <p>
          you can scroll when your text is longer than the specified{" "}
          <span
            style={{
              fontFamily: "monospace",
              fontSize: "18px",
              color: "green"
            }}
          >
            maxHeight
          </span>
          ! how cool is that? :D
        </p>
        <button>You can put whatever you want in here!</button> <br />
        <br />
        <i>even cute cats &lt;3 </i>
        <img
          alt="cute cat no available :c"
          style={{ width: "100%" }}
          src="https://images.unsplash.com/photo-1494256997604-768d1f608cac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1401&q=80"
        />
        <p>Lorem ipsum dolor sit amet</p>
        <p>Lorem ipsum dolor sit amet</p>
        <p>Lorem ipsum dolor sit amet</p>
        <p>Lorem ipsum dolor sit amet</p>
      </Spoiler>
    </div>
  );
}
