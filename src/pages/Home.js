import React from "react";

export default class Home extends React.Component {
  render() {
    return (
      <div className="pageContainer">
        <h2 className="text-3xl font-bold underline">Heya, its Chelsea.</h2>
        <img
          className=""
          src={require("../images/cat-logo.png")}
          width="250"
          alt="icon"
        />
        <p>
          Compsci student, software engineer, hobby artist and Japan enthusiast.
        </p>
        <h2>About me</h2>
        <ul>
          {/* additional details on hover  */}
          <li>4th Year B. Computer Science @ UNSW</li>
          <li>Currently interning @Atlassian</li>
          <li>Casual Academic</li>
          <li>Multimedia VP and Creative Director</li>
          <li>Hopeful exchange student @UTokyo Japan</li>
          <br></br>
          <li>INTP</li>
          <li>Proud owner of a (mostly functional) home-built PC</li>
          <li>Hobby artist and sketcher</li>
          <li>Avid genshin player and fanartist</li>
          <li>Eucalyptus tree admirer and bubble tea enthusiast</li>
          <li>Desperately wants a pet cat</li>
        </ul>
        <h2>Technical Rundown</h2>

        <p>
          I&apos;ve had experience in various fields, from backend to
          datascience to frontend. I have a particular interest in frontend
          engineering, desing and usability.
        </p>

        <h2>Media</h2>
        <p>
          As part of Women In Technology Society (WIT), I&apos;ve had the chance
          to publish blog posts on topical topics.
        </p>
        <p>I&apos;ve created various designs and covers for CSESoc.</p>

        <h2>Personal Work</h2>
        <p>
          Feel free to check out my art instagrams, @inkchaff and @charraxeon.
        </p>
      </div>
    );
  }
}
