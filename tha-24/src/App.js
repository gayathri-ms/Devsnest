import './App.css';
import React , { useState } from "react"
import { BrowserRouter as Router ,Route , Switch} from "react-router-dom"
import Home from "./Components/Home"
import About from "./Components/about"
import Profile from "./Components/profile"
import Dashboard from "./Components/dashboard"
import Nav from "./Components/nav"

function App() {
  const [islogged , setIslogged] = useState(false)
  const home=<Home islogged={islogged} setIslogged={setIslogged} /> ;

  return (
    <Router >
    <div className="App">
     <Nav />
     <Switch>
       <Route path="/home"> {home} </Route>
       <Route path="/about" component={About} />
       {
         islogged ? <Route path="/profile" component={Profile} /> : home
       }
       { 
         islogged ? <Route path="/dashboard" component={Dashboard} />: home
       }
      </Switch>
    </div>
    </Router>
  );
}

export default App;
