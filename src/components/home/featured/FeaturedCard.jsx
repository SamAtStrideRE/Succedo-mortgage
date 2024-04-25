import React from "react"
import { featured } from "../../data/Data"

const FeaturedCard = () => {
  return (
    <>
      <div className='content grid3 mtop'>
        {featured.map((items, index) => (
          <div className='box' key={index}>
            <img src={items.cover} alt='' />
            <h4>{items.name}</h4>
            <label>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, autem. Quam consequatur veniam illo sunt nihil quas soluta, quos maxime!</label>
          </div>
        ))}
      </div>
    </>
  )
}

export default FeaturedCard
