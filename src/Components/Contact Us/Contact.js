import React from "react";
import Footer from "../footer/Footer";
import {Link } from "react-router-dom"

const Contact = () => {
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
      <h1>About Scrabbler

</h1>
<p>Scrabbler is an innovative, digital media company with rapid-fire growth. The family of privately held LoveToKnow websites, including scrabbler.com, Bibliography.com, LoveToKnow.com, and GolfLink.com, is dedicated to providing useful, high-quality, and unique content to internet users.</p>
      <ul>
        <li>To contact us</li>
        <li>For advertising information</li>
        
      </ul>
      <h4>Easy-to-Use Source for Word Information
</h4>
      <span><p>Using scrabbler couldn't be easier. It offers a clear dictionary you can understand, with lots of tools and resources to help you choose your words precisely, avoid usage pitfalls, and be confident in your use of grammar.</p></span>
      <span><p>You will find:</p></span>
      <ul>
        <li>Simple, easy-to-understand definitions</li>
        <li>Pronunciation help - See and hear how to pronounce a word</li>
        <li>Parts of speech - Learn how a word is used as a verb, noun, pronoun, adjective, adverb, preposition, conjunction, or interjection</li>
        <li>Examples of a word - Read clear illustrations of the meaning of a word</li>
        <li>Sentence examples - See examples of a word used in sentences to give context
</li>
<li>Etymology (origin) of a word - Learn the history or source of a word
</li>
<li>Browsing help - Discover related or similar words</li>


        
      </ul>
      </div>
      

      <br />
  <br />
  <br />
      <Footer />
</>
  );
};

export default Contact;
