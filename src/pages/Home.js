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
          <p className="text-2xl">
            Meet Chelsea: Compsci student, software engineer and hobby artist.
          </p>
        </div>
        <div className="grid grid-cols-3 content-center px-20 pb-36 [&>*]:text-2xl">
          <div>
            <ul className="[&>*]:pb-6">
              <li>4th Year B. Computer Science @UNSW</li>
              <li>Interning @Atlassian</li>
              <li>Casual Academic @UNSW</li>
              <li>Multimedia VP @UNSWWIT</li>
              <li>Creative Director @CSESoc</li>
              <li>exchange student @UTokyo</li>
            </ul>
          </div>
          <div></div>
          <div>
            <ul className="[&>*]:pb-6">
              {/* additional details on hover  */}
              <li>INTP</li>
              <li>Proud owner of a (mostly functional) home-built PC</li>
              <li>Hobby artist and sketcher</li>
              <li>Avid genshin player and fanartist</li>
              <li>Eucalyptus tree admirer</li>
              <li>Desperately wants a pet cat</li>
            </ul>
          </div>
        </div>
        <div className="mx-auto bottom-0 fixed w-screen h-2/4">
          <img
            className="mx-auto h-full"
            src={require("../images/cat-logo.png")}
            alt="cat logo"
          />
        </div>
      </div>
    );
  }
}
