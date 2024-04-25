import React from "react"
import Heading from "../../common/Heading"
import "./Featured.css"
import FeaturedCard from "./FeaturedCard"

const Featured = () => {
  return (
    <>
      <section className='featured background'>
        <div className='container'>
          <Heading title='Cheaper Faster,Easier is the Better way' subtitle='Find All Type of Loans' />
          <FeaturedCard />
        </div>
      </section>
    </>
  )
}

export default Featured
