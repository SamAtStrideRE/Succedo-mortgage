import React from "react"
import Header from "../common/header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "../home/Home"
import Footer from "../common/footer/Footer"
import About from "../about/About"

import Blog from "../blog/Blog"
import FHA from "../mortgages/FHA"
import Contact from "../contact/Contact"
import ARM from "../mortgages/ARM"
import FRM from "../mortgages/FRM"
import jumbo from "../mortgages/jumbo"
import VA from "../mortgages/VA"
import NonQM from "../mortgages/NonQm"
import CalcApp from "../mortgageCalculator/CalcApp"
import CurrentRates from "../rates/CurrentRates"
import FAR from "../rates/FAR"
import Refinance from "../tools/Refinance"


const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />

          {/* Mortgages Pages */}
          <Route exact path='/ARM' component={ARM} />
          <Route exact path='/FHA' component={FHA} />
          <Route exact path='/FRM' component={FRM} />
          <Route exact path='/Jumbo' component={jumbo} />
          <Route exact path='/VA' component={VA} />
          <Route exact path='/NonQM' component={NonQM} />


          <Route exact path='/blog' component={Blog} />
          <Route exact path='/CalcApp' component={CalcApp} />
          <Route exact path='/Refinance' component={Refinance} />
          <Route exact path='/FAR' component={FAR} />
         
         
          <Route exact path='/contact' component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default Pages