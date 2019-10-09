import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';
import Profile from './components/profile/Profile';
import Contact from './components/contact/Contact';
import Projects from './containers/projects/Projects';
import Social from './containers/social/Social';
import Skills from './containers/skills/Skills';

const App = () => {
  return (
    <div>
      <NavBar />
      <Route path="/profile" component={Profile} />
      <Route path="/skills" component={Skills} />
      <Route path="/projects" component={Projects} />
      <Route path="/contact" component={Contact} />
      <Redirect from="/" to="/profile" />
      <Social />
      <Footer />
    </div>
  );
}

export default App;