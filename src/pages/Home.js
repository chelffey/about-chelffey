import React from "react";

export default class Home extends React.Component {
  render() {
    return (
      <div className="bg-dark text-white font-sans pl-20 pr-20 pb-32">
        <div className="h-screen flex flex-col items-center justify-center">
          <div className=" max-w-screen-sm w-full text-right ">
          ✦&nbsp; &nbsp; &nbsp;  ✩&nbsp;  ★&nbsp; &nbsp; &nbsp; ✶
          </div>
          <h1 className="max-w-screen-sm text-left">
            <div className="text-6xl">
            coder by day, <br/>
            dreamer by night
            </div>
            <div className="leading-loose pb-10 pl-1 pt-2">
            code | canvas | challenge
            </div>
          </h1>
          <div className="pb-10 max-w-screen-sm text-justify">
        Hi, I’m Charley (they/them). I fell into coding when I was in high-school, discovering the joy of of Python for the first time. Since then, I’ve been fascinated by the potential of my keyboard in building things - games, websites, models, and so much more. It has been matched only by my passion for art and design, and my drive to challenge myself. 
 
          </div>
          <div> ↓ </div>

        </div>
        <div className="flex flex-col items-center justify-center">
      
          <div className="flex flex-col items-center justify-center h-screen">
            <div className="max-w-screen-sm">
              <h2 className="text-4xl pb-5">
            code
              </h2>
              <div className="pb-10">
            During my studies in Computer Science (Co-op Program) @ UNSW, I’ve dipped into as many software disciplines as I could. I’ve interned in back-end engineering and product at WiseTech Global, R&D Machine Learning at ResMed, and finally, front-end engineering at Atlassian. JavaScript jokes aside, it was front-end that had me hooked - and like dark mode, I haven’t looked back since. 
              </div>
              <div>
            I love been able to see my code brings design to life and into the hands of users. 
              </div>
              <div className="text-center pt-10"> ↓ </div>
            </div>
          </div>
        
          <div className="flex flex-col items-center justify-center h-screen">
            <div className="max-w-screen-sm">
              <h2 className="text-4xl pb-5">
            canvas
              </h2>
              <div>
          My art is many things, but it is never static. It is a home where I can express my passions, from trees to movies, and my comfort spot where I can unwind, relax and re-energise myself. Though I constantly seek new challenges and to improve my skills as far as possible, I strive most to keep my artmaking as a place of joy.
              </div>
              <div className="text-center pt-10"> ↓ </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center h-screen">
            <div className="max-w-screen-sm">
              <h2 className="text-4xl pb-5">
          challenge
              </h2>
              <div className="pb-10">
          In September 2023, I took a 9 hour flight to fulfil a childhood dream and tackle the ultimate programmer challenge - learning a human language. 
              </div>
              <div>
          Having deciding I’ve spent too much time ‘in the clouds’ (metaphorically and semi-literally), I went on an in-person exchange to study at Tokyo University as a Westpac Asian Exchange Scholar. With just a few months of prior Japanese language experience, I enrolled in five intensive language classes a week and then proceeded to learn basic survival skills for the next five months. It was an immensely eye-opening experience that has only strengthened my character and self-knowledge. After all, if I can survive half a year alone in a foreign country, what challenges can’t I overcome? 
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
