import React from "react";
import Header from "./components/header/Header";
import { HashRouter, Route} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Films from "./pages/films/Films";
import TVchannel from "./pages/TVchannel/TVchannel";
import Footer from "./components/footer/Footer";
import { AnimatedSwitch } from "react-router-transition";

function App(props) {
  return (
    <HashRouter>
      <div className="App">
        <Header />
        <Navbar />
        <AnimatedSwitch
          atEnter={{ opacity: 0 }}
          atLeave={{ opacity: 0 }}
          atActive={{ opacity: 1 }}
          className="switch-wrapper"
        >
          <Route path="/" exact>
            <Films state={props.state} />
          </Route>
          <Route path="/channel" exact>
            <TVchannel state={props.state} />
          </Route>
        </AnimatedSwitch>
      </div>
      <Footer />
    </HashRouter>
  );
}
export default App;
