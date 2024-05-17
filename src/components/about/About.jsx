import React from "react"
import Back from "../common/Back"
// import Heading from "../common/Heading"
// import Team from "../home/team/Team"
import img from "../image/about.jpg"
import "./about.css"

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='About Us' title='About Us - Who We Are?' subtitle="Succedo Mortgages" cover={img} />
        {/* <Team/> */}
        
      </section>
    </>
  )
}

export default About
