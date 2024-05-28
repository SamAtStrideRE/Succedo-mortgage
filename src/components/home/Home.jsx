import React from "react"
// import Header from "../common/header/Header.jsx"
import Featured from "./featured/Featured"
import Hero from "./hero/Hero"
import ReviewCarousel from "../reviewCard/ReviewCarousel"
import Awards from "./awards/Awards"

const Home = () => {
  return (
    <>
      {/* <Header/> */}
      <Hero />
      <Featured />
      <Awards />
      <ReviewCarousel/>
   
      {/* <Team /> */}
      {/* <Price /> */}
    </>
  )
}

export default Home
