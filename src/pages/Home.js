import React from "react";

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="p-10">
          <h2 className="text-3xl font-bold pb-5">Heya, its Chelsea.</h2>
          <p className="italic">
            Compsci student, software engineer and hobby artist.
          </p>
        </div>
        <div className="grid grid-cols-3 content-center p-5">
          <div>
            <ul>
              {/* additional details on hover  */}
              <li>4th Year B. Computer Science @ UNSW</li>
              <li>Currently interning @Atlassian</li>
              <li>Casual Academic</li>
              <li>Multimedia VP and Creative Director</li>
              <li>Hopeful exchange student @UTokyo Japan</li>
            </ul>
          </div>
          <section className="hero container max-w-screen-lg mx-auto pb-10">
            <img
              className="mx-auto w-36"
              src={require("../images/cat-logo.png")}
              alt="cat logo"
            />
          </section>
          <div>
            <ul>
              <li>INTP</li>
              <li>Proud owner of a (mostly functional) home-built PC</li>
              <li>Hobby artist and sketcher</li>
              <li>Avid genshin player and fanartist</li>
              <li>Eucalyptus tree admirer</li>
              <li>Desperately wants a pet cat</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold py-5">Technical Rundown</h2>

        <p>
          I&apos;ve had experience in various fields, from backend to data
          science to frontend. I have a particular interest in frontend
          engineering, design and usability.
        </p>
        <div className="pb-10">
          <h2 className="text-2xl font-bold py-5">Media</h2>
          <p>
            As part of Women In Technology Society (WIT), I&apos;ve had the
            chance to publish blog posts on topical topics.
          </p>
          <p>I&apos;ve also created various designs and covers for CSESoc.</p>

          <h3 className="font-bold pt-3">Personal Work</h3>
          <p>
            Feel free to check out my art instagrams, @inkchaff and @charraxeon.
          </p>
        </div>
      </div>
    );
  }
}
