import React from "react";

export default class Home extends React.Component {
  render() {
    return (
      <div className="h-screen bg-gray-700 text-white font-sans h-screen flex flex-col items-center justify-center">
        <h1 className="w-1/2 text-center">
          <div className="text-2xl pt-5">
            Hi, I&apos;m
          </div>
          <div className="text-8xl">
            Charley
          </div>
          <div className="leading-loose pb-10">
            (they/them)
          </div>
        </h1>
        <div className="text-2xl pb-10">
          I create things.
        </div>

        <div>
          <h2>
            from design to reality
          </h2>
        </div>
        
        <div>
          <h2>
            from emotion to art
          </h2>
        </div>

        <div className="pt-10 italic">
          (website under development)
        </div>
      </div>
    );
  }
}
