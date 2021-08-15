import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import Home from './component/Home';
import Profile from './component/Profile';
import Skill from './component/Skill';
import Work from './component/Work';
import Contact from './component/Contact';
// import Footer from './component/Footer';


const App = () => {
  return (
    <div className="App">
      <Router>
        <div>
          <Header />
          <Route path='/Home' component={Home} />
          <Route path='/Profile' component={Profile} />
          <Route path='/Skill' component={Skill} />
          <Route path='/Work' component={Work} />
          <Route path='/Contact' component={Contact} />
          {/* <Footer /> */}
        </div>
      </Router>
    </div>
  );
}

export default App;
