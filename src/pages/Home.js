import React from "react";

export default class Home extends React.Component {
  render() {
    return (
      <div className="h-screen">
        <div className="py-32">
          <h2 className="text-3xl italic pb-5">
            part coder. part artist. part writer.
          </h2>
          <h2 className="text-5xl font-bold pb-5">full creator.</h2>
        </div>
        <div className="grid grid-cols-3 content-center px-20 pb-36 [&>*]:text-2xl">
          <div>
            <ul className="[&>*]:pb-6">
              <li>Age: 20</li>
              <li>Pronouns: she/they</li>
              <li>Major: Computer Science @UNSW</li>
              <li>Year: Penultimate</li>
              <li>INTP</li>
            </ul>
          </div>
          <div></div>
          <div>
            <ul className="[&>*]:pb-6">
              {/* additional details on hover  */}
              <li>Interning @Atlassian</li>
              <li>Casual Academic @UNSW</li>
              <li>Multimedia VP @UNSWWIT</li>
              <li>Creative Director @CSESoc</li>
              <li>exchange student @UTokyo</li>
            </ul>
          </div>
        </div>
        <div className="mx-auto bottom-0 fixed w-screen h-2/3">
          <img
            className="mx-auto h-full"
            src={require("../images/cat-world-sleepy.png")}
            alt="cat logo"
          />
        </div>
      </div>
    );
  }
}
