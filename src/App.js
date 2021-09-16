import React, { Component } from "react"
// eslint-disable-next-line
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Home from "./components/Home"
import Skills from "./components/Skills"
import Resume from "./components/Resume"
import Contact from "./components/Contact"
import About from "./components/About"
import Connect from "./components/Connect"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer"

const App = () => {
    return (

   
      <div className="page-container">
          <div className="content-wrap">
         
      
      <Router>
  
      
        <Navbar />
  
        <Switch>
          <Route path="/" component={Home} exact>
            <Home /> 
  
          </Route>
          <Route path="/skills" component={Skills} exact>
            <Skills /> 
  
          </Route>
          <Route path="/resume" component={Resume} exact>
            <Resume /> 
  
          </Route>
          <Route path="/contact" component={Contact} exact>
            <Contact /> 
  
          </Route>
          <Route path="/about" component={About} exact>
            <About /> 
  
          </Route>
  
          <Route path="/Connect" component={Connect} exact>
            <Connect /> 
  
          </Route>
  
          <Route path="/Footer" component={Footer} exact>
            <Footer /> 
  
          </Route>
        </Switch>
        
      </Router>
        </div>
      <Footer />
        </div>
     )
  
    
  }
  
  
  

export default App