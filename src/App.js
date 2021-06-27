import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//--components
import Navbar from './components/Navbar'
//--pages
import Homepage from './pages/Homepage'
import Aboutpage from './pages/Aboutpage'
import Singlepage from './pages/Singlepage'


function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/about' component={Aboutpage} />
          <Route exact path='/singleshow/:id' component={Singlepage} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
