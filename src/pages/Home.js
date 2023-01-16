import React from "react";

export default class Home extends React.Component {
  render() {
    return (
      <div className="h-screen">
        <div className="p-10">
          <h2 className="text-2xl italic pb-5">
            part coder. part artist. part writer.
          </h2>
          <h2 className="text-3xl font-bold pb-5">full creator.</h2>
          <p className="">
            Meet Chelsea: Compsci student, software engineer and hobby artist.
          </p>
        </div>
        <div className="grid grid-cols-3 content-center border-2 border-white">
          <div className="border-2 border-white">
            <ul>
              {/* additional details on hover  */}
              <li>4th Year B. Computer Science @ UNSW</li>
              <li>Currently interning @Atlassian</li>
              <li>Casual Academic</li>
              <li>Multimedia VP and Creative Director</li>
              <li>Hopeful exchange student @UTokyo Japan</li>
              <li>INTP</li>
            </ul>
          </div>
          <section className="hero container max-w-screen-lg mx-auto pb-10">
            <img
              className="mx-auto"
              src={require("../images/cat-logo.png")}
              alt="cat logo"
            />
          </section>
          <div>
            <ul>
              <li>Proud owner of a (mostly functional) home-built PC</li>
              <li>Hobby artist and sketcher</li>
              <li>Avid genshin player and fanartist</li>
              <li>Eucalyptus tree admirer</li>
              <li>Desperately wants a pet cat</li>
            </ul>
          </div>
        </div>
        <div>
          <img
            className="block mx-auto w-1/5"
            src={require("../images/cat-logo.png")}
            alt="cat logo"
          />
        </div>
      </div>
    );
  }
}
