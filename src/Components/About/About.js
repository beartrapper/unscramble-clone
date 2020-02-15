import React from "react";
import Footer from "../footer/Footer";
import {Link } from "react-router-dom"

const About = () => {
  return (  <>
 
    
    <nav class="navbar navbar-expand-lg navbar-light bg-light bottom-border-nav fixed-top">
        <div class="container-fluid">
  <a class="navbar-brand" href="#">Scrabbler</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
    <Link to="/unscramble">

      <li class="nav-item active">
        <a class="nav-link" href="#">Unscrambler</a>
      </li>
      </Link>
      <Link to="/wwf">

      <li class="nav-item">
        <a class="nav-link" href="#">WWF</a>
      </li>
      </Link>
      <li>
      <div class="dropdown">
  <button class="dropbtn">Words List</button>
  <div class="dropdown-content">
  <Link to="/start">

<a class="dropdown-item" href="#">Words starting with</a>
</Link>
<Link to="/end">

<a class="dropdown-item" href="#">Words that end with</a>
</Link>
<Link to="/length">

<a class="dropdown-item" href="#">Words by length</a>
</Link>
  </div>
</div>
      </li>
     
    
    </ul>

  </div>
  </div>
</nav>

<br />
  <br />
  <br />
    
      <div className="container">
      <h1>Contact Us
</h1>
<h4>We would love to hear from you.</h4>
<p>We value your opinions and suggestions and we encourage you to contact us! You can get in touch with us in a variety of ways:</p>
      <ul>
        <li>Comments - Send us your thoughts, ideas or questions using the comments section on the bottom of this screen on most scrabbler screens</li>
        <li>General email: admin (at) scrabbler.com</li>
        <li>For advertising or sales questions: advertising (at) scrabbler.com</li>
      </ul>
      <span><p>We also encourage you to check our frequently asked questions (FAQ). This list of commonly-asked questions and answers could be just what you need to find a quick answer to your query.</p></span>
      <span><p>Whatever avenue you use to get in touch with us, keep those comments, questions and ideas coming. Tell us what works, and doesn't work, for you on scrabbler. Many of our best ideas come from our readers.</p></span>
      </div>

      <br />
  <br />
  <br />
      <Footer />
</>
  );
};

export default About;
