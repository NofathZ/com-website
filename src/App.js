import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'aos/dist/aos.css'
import LandingPage from './pages/LandingPage';
import About from './pages/About';
import Structure from './pages/Structure';
import OpenRecruitment from './pages/OpenRecruitment';
import FAQ from './pages/FAQ'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/structure">
            <Structure />
          </Route>
          <Route path="/oprec">
            <OpenRecruitment />
          </Route>
          <Route path="/faq">
            <FAQ />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
