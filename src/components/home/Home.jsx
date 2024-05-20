import React from "react"
// import Header from "../common/header/Header.jsx"
import Featured from "./featured/Featured"
import Hero from "./hero/Hero"
import ReviewCarousel from "../reviewCard/ReviewCarousel"


const Home = () => {
  return (
    <>
      {/* <Header/> */}
      <Hero />
      <Featured />
      <ReviewCarousel/>
      {/* <Awards /> */}
      {/* <Team /> */}
      {/* <Price /> */}
    </>
  )
}

export default Home
