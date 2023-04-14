import React from "react";
import "./App.css";
import Header from "./components/header/header";
import Nav from "./components/nav/nav";
import Footer from "./components/footer/Footer";
import Article from "./components/article/Article";
import Figure from "./components/Figure/Figure";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">
          <div className="col-md-2">
            <Nav />
          </div>
          <div className="col-md-10">
            <div className="row">
              <div className="col-md-3">
                <Figure />
                <Figure />
                <Figure />
              </div>
              <div className="col-md-9">
                <Article />
                <Article />
                <Article />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
