import React, { useEffect } from "react";
import Search from "./Components/Search/Search";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AnimatedSwitch } from "react-router-transition";
import UnscrambleSearch from "./Components/Routes/UnscrambleSearch.js/UnscrambleSearch";
import WWFCheat from "./Components/Routes/WWFCheat/WWWCheat";
import Start from "./Components/Routes/StartingWith/Start";
import Ending from "./Components/Routes/EndingWith/EndingWith";
import Length from "./Components/Routes/ByLength/ByLength";
import LetterNav from "./Components/Routes/Letter/LetterNav";
import LetterEndNav from "./Components/Routes/Letter/LetterEndNav";
import LetterWords from "./Components/Routes/Letter/LetterWords";
import About from "./Components/About/About";
import Contact from "./Components/Contact Us/Contact";

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route path="/" exact component={Search} />
            <Route path="/unscramble" component={UnscrambleSearch} />
            <Route path="/wwf" component={WWFCheat} />
            <Route path="/start" component={Start} />
            <Route path="/end" component={Ending} />
            <Route path="/length" component={Length} />
            <Route path="/letternav" component={LetterNav} />
            <Route path="/letternavend" component={LetterEndNav} />
            <Route path="/letterwords" component={LetterWords} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />

          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
