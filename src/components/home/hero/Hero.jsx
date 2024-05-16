import React from "react";
import Heading from "../../common/Heading";
import "./hero.css";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <Heading title="YOUR SUCCESS IS OUR PRIORITY" />
          <div className="buttons">
            <a href="https://2584954.my1003app.com/2398062/register" target="_blank" rel="noopener noreferrer"><button className="btn" >Apply Now</button></a>
            <button className="btn">Request a Call</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
