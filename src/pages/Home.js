import React from "react";
import ImageCodePC from "../images/code-pc.jpg";
import ImageArtSpiritedAway from "../images/art-spirited-away.jpg";
import ImageArtTree from "../images/art-tree.jpg";
import ImageJapanTokyoUni from "../images/jap-tokyo-uni.jpg";
import ImageJapanTeine from "../images/jap-teine.jpg";

export default class Home extends React.Component {
  render() {
    return (
      <div className="bg-dark text-white font-sans pl-20 pr-20 text-justify">
        <div className="h-screen colbox">
          <div className="animate-pulse text-yellow-600 max-w-screen-sm w-full text-right ">
          ✦&nbsp; &nbsp; &nbsp;  ✩&nbsp;  ★&nbsp; &nbsp; &nbsp; ✶
          </div>
          <div className="max-w-screen-sm text-left">
            <h1 className="text-6xl">
            coder by day, <br/>
            dreamer by night
            </h1>
            <p className="leading-loose pb-10 pl-1 pt-2 text-yellow-600">
            code | canvas | challenge
            </p>
          </div>
          <p className="pb-10 max-w-screen-sm text-justify">
        Hi, I’m Charley (they/them). I fell into coding when I was in high-school, discovering the joy of of Python for the first time. Since then, I’ve been fascinated by the potential of my keyboard in building things - games, websites, models, and so much more. It has been matched only by my passion for art and design, and my drive to challenge myself. 
 
          </p>
          <div className="text-yellow-600"> ↓ </div>

        </div>
        <div className="colbox">
      
          <div className="min-h-screen colbox">

            <div className="colbox mr-10">
              <div className="max-w-screen-sm">
                <h2 className="text-4xl pb-5">
                code
                </h2>
                <p>
                During my studies in Computer Science (Co-op Program) @ UNSW, I’ve dipped into as many software disciplines as I could. I’ve interned in back-end engineering and product at WiseTech Global, R&D Machine Learning at ResMed, and finally, front-end engineering at Atlassian. JavaScript jokes aside, it was front-end that had me <span className="italic">hooked</span> - and like dark mode, I haven’t looked back since. 
                </p>
              
              </div>
            </div>
            
            <div className="rowbox">
              <div className="max-w-screen-sm text-center colbox mt-10">
                <img src={ImageCodePC} alt="Custom built PC" className="w-72 pb-5"/>
                <p className="italic">The PC I custom built in 2021.</p>
              </div>
            </div>

            <div className="text-center pt-10 text-yellow-600"> ↓ </div>
          </div>



          <div className="colbox min-h-screen">
            <div className="max-w-screen-sm">
              <h2 className="text-4xl pb-5">
            canvas
              </h2>
              <p>
          My art is many things, but it is never static. It is a home where I can express my passions, from trees to movies, and my comfort spot where I can unwind, relax and re-energise myself. Though I constantly seek new challenges and to improve my skills as far as possible, I strive most to keep my artmaking as a place of joy.
              </p>
              <div className="rowbox">
                <div className="max-w-screen-sm text-center colbox mt-10">
                  <img src={ImageArtTree} alt="Angophora Costata drawing in pen" className="w-72 pb-5"/>
                  <p className="italic">(a section of) my Year 12 Major Work</p>
                </div>
                <div className="max-w-screen-sm text-center colbox mt-10">
                  <img src={ImageArtSpiritedAway} alt="Chihiro and Haku from Spirited Away" className="w-72 pb-5"/>
                  <p className="italic">Spirited Away fan artwork</p>
                </div>
              </div>
              <div className="text-center pt-10 text-yellow-600"> ↓ </div>
            </div>
          </div>
          



          <div className="colbox min-h-screen">
            <div className="max-w-screen-sm">
              <h2 className="text-4xl pb-5">
          challenge
              </h2>
              <p className="pb-10">
          In September 2023, I took a 9 hour flight to fulfil a childhood dream and tackle the ultimate programmer challenge - learning a human language. 
              </p>
              <p>
          Having deciding I’ve spent too much time ‘in the clouds’ (metaphorically and semi-literally), I went on an in-person exchange to study at Tokyo University as a Westpac Asian Exchange Scholar. With just a few months of prior Japanese language experience, I enrolled in five intensive language classes a week and then proceeded to learn basic survival skills for the next five months. It was an immensely eye-opening experience that has only strengthened my character and self-knowledge. After all, if I can survive half a year alone in a foreign country, what challenges can’t I overcome? 
              </p>

              <div className="rowbox">
                <div className="max-w-screen-sm text-center colbox mt-10">
                  <img src={ImageJapanTokyoUni} alt="Tokyo University Komaba Campus" className="w-72 pb-5"/>
                  <p className="italic">Tokyo University on a rare snowy day</p>
                </div>
                <div className="max-w-screen-sm text-center colbox mt-10">
                  <img src={ImageJapanTeine} alt="Skiers on the white slopes in the snow" className="w-72 pb-5"/>
                  <p className="italic">Sapporo Teine - my first skiing lesson</p>
                </div>
              </div>

              <div className="text-right pt-10 animate-pulse text-yellow-600 mb-12">✦</div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}
