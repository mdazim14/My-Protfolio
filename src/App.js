import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navber from './Components/Header/Navber';
// import Body1 from './Components/Body/Body1/Body1';
import Body2 from './Components/Body/Body2/Body2';
import Project from './Components/Projects/Project';
import Blog from './Components/Blog/Blog';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';


function App() {
  return (
    <div>
      <Navber></Navber>

      <Router>

        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/about">
            <Body2></Body2>
          </Route>

          <Route path="/project">
            <Project></Project>
          </Route>

          <Route path="/blog">
            <Blog></Blog>
          </Route>

          <Route path="/contact">
            <Contact></Contact>
          </Route>



        </Switch>

      </Router>
    </div>
  );
}

export default App;
