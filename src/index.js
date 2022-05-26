import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import About from './Components/About';
import reportWebVitals from './reportWebVitals';
import Navigation from "./Components/Navigation";
import Gallery from "./Components/Gallery";
import Footer from "./Components/Footer";
import Skills from "./Components/Skills";

ReactDOM.render(
  <React.StrictMode>
    <div className="contentContainer">
    <Navigation />
    <About />
    <Skills />
    <Gallery />
    </div>
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


//Projects, About Me, Why Code, Skills, 