import React, { useEffect, useState } from "react";
import Heading from "../../common/Heading";
import "./hero.css";

const Hero = () => {
  const [showYellowContainer, setShowYellowContainer] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Adjust this value to determine when to show/hide .yellow-container
      const scrollThreshold = 100; // Example threshold, adjust as needed

      if (scrollPosition > scrollThreshold && !showYellowContainer) {
        setShowYellowContainer(true);
      } else if (scrollPosition <= scrollThreshold && showYellowContainer) {
        setShowYellowContainer(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showYellowContainer]);

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <Heading title="YOUR SUCCESS IS OUR PRIORITY" />
          <div className="buttons">
            <a
              href="https://2584954.my1003app.com/2085367/inquiry"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn">Apply Now</button>
            </a>
            <button className="btn">Request a Call</button>
          </div>
          <div className={`moving-yellow-container ${showYellowContainer ? 'show' : ''}`}>
            <div className="hero-text">
              <h1>Flexible Home Financing Options For Every Buyer</h1>
              <p>
                At Succedo, we simplify the home buying process with clear terms and flexible,
                affordable mortgage rates. Our mission is not just to help you find a house but to
                make a valuable investment in a place you can call home.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
