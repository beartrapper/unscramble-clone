import React from "react";
import { Animated } from "react-animated-css";

const About = () => {
  return (
    <Animated animationIn="slideInUp" animationOut="fadeOut">
      <div class="containerr container">
        <div class="card-bottom">
          <div class="card-image">
            <img src="https://res.cloudinary.com/dflpfmync/image/upload/v1580729333/questionmark_td0mtb.jpg" />
          </div>
          <div class="card-text">
            <p>
              Stuck in Scrabble? Scrabbler is the cheat tool that will help you
              wipe out the competition.
            </p>
          </div>
        </div>
        <div class="card-left">
          <div class="card-image">
            <img src="https://res.cloudinary.com/dflpfmync/image/upload/v1580729346/lifeline_sn0s2i.jpg" />
          </div>
          <div class="card-text">
            <p>Chomped in Word Chums? We're your life-line.</p>
          </div>
        </div>
        <div class="card-bottom">
          <div class="card-image">
            <img src="https://res.cloudinary.com/dflpfmync/image/upload/v1580729332/wrong_nmyp8b.jpg" />
          </div>
          <div class="card-text">
            <p>
              Making enemies in Words With Friends over scrabble? We're on your
              side.
            </p>
          </div>
        </div>
        <div class="card-right">
          <div class="card-image">
            <img src="https://res.cloudinary.com/dflpfmync/image/upload/v1580729335/alphabets_s6rumn.jpg" />
          </div>
          <div class="card-text">
            <p>
              Type in the letters you want and our word finder will show you all
              the possible words you can make from the letters.
            </p>
          </div>
        </div>
      </div>
    </Animated>
  );
};

export default About;
