import React from "react";
import Header from "./components/header/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Films from "./pages/films/Films";
import TVchannel from "./pages/TVchannel/TVchannel";
import Footer from "./components/footer/Footer";

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Navbar />
          <Switch>
            <Route path="/" exact>
              <Films state={props.state} />
            </Route>
            <Route path="/channel" exact>
              <TVchannel state={props.state} />
            </Route>
          </Switch>
        </div>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
