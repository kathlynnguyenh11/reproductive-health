import React from "react";
import { BrowserRouter, Link, Route } from 'react-router-dom';
import './css/app.css';

import Home from './Home';
import FlashCardPage from './components/FlashCardPage';
import QuizPage from './components/QuizPage';
import VideoPage from './components/VideoPage';
import logo from './asset/logo.png';

function App (){
    return (
      <BrowserRouter>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-2">
           
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link className="nav-link dangling-font brand text-white" to="/">For a better reproductive health</Link>      
                </li>
              </ul>
            </div>
            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
              <ul className="navbar-nav">
              <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Learn</a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <Link className="dropdown-item" to="/std">STD</Link>
                    <Link className="dropdown-item" to="/sexual-orientation">Sex and Gender Identity</Link>
                    <Link className="dropdown-item" to="/reproductive-anatomy">Reproductive Anatomy</Link>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="https://github.com/kathlynnguyenh11/reproductive-health">Github</a>
                </li>
              </ul>
            </div>
          </nav>
          <Route path="/" exact component={Home} />
          <Route path="/std/" component={FlashCardPage} />
          <Route path="/sexual-orientation/" component={QuizPage} />
          <Route path="/reproductive-anatomy/" component={VideoPage} />
        </div>
      </BrowserRouter>
    );
  }



export default App;
  
