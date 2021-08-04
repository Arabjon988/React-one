import './App.css';
import {
  BrowserRouter as Router, Route, Redirect, Switch
} from 'react-router-dom'
import Navbar from './components/Navbar';
import Contacts from './container/Contacts';
import Services from './container/Services';
import About from './container/About';
import Gallery from './container/Gallery';
import Home from './container/Home';


function App() {
  return (
    <Router>
      <Navbar />
      <div className="pages">
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/services" exact>
            <Services />
          </Route>
          <Route path="/gallery" exact>
            <Gallery />
          </Route>
          <Route path="/contact" exact>
            <Contacts />
          </Route>

          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
