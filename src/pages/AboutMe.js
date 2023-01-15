import React from "react";

export default class AboutMe extends React.Component {
  render() {
    return (
      <div className="pageContainer">
        <h1>About me, [the website].</h1>
        <p>
          Thought you were learning more about Chelsea? Well you thought wrong -
          cause you&apos;re actually talking to me, the website.
        </p>
        <p>
          I was born on a hot summers day. I was concieved from Javascript,
          React and a dose of imagination. Though I am only a few days old, I am
          growing fast. Each day I prune myself with ESLint and Prettier.
        </p>
        <h2>What am I made of</h2>
        <p>Reactjs with Javascript, a full frontend hosted on GitHub pages.</p>
        <p>Chelsea&apos;s frontend skills went UP after I was created.</p>
        <p>Check out my repo - my blood and guts.</p>
      </div>
    );
  }
}
