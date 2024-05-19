import React from "react"
// import Header from "../common/header/Header.jsx"
import Featured from "./featured/Featured"
import Hero from "./hero/Hero"
import ReviewList from "../reviewCard/ReviewList"
// import Price from "./price/Price"
// import Team from "./team/Team"

const Home = () => {
  return (
    <>
      {/* <Header/> */}
      <Hero />
      <Featured />
      <ReviewList/>
      {/* <Awards /> */}
      {/* <Team /> */}
      {/* <Price /> */}
    </>
  )
}

export default Home
