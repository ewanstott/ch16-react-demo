import React, { Component } from "react";
import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";
import { Main } from "./components/Main.jsx";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <aside></aside>
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
