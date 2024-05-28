import React from "react";
import Back from "../common/Back";
import img from "../image/about.jpg";
import "./about.css";

const About = () => {
  return (
    <>
      <section className="about">
        <Back
         
          // title="About Us - Who We Are?"
          cover={img}
          
        />
         <div className="aboutoverlay"></div> {/* Black gradient overlay */}
        <div className="welcome-container">
        <div className="overlay-text-about"> ABOUT US</div> {/* Text overlay */}
          <h2>Welcome To Succedo</h2>
          <div className="content-container">
            <p>
              Welcome to Succedo Mortgage; We are a team of seasoned
              professionals with a wealth of experience in the mortgage
              industry. Our mission is to guide and support our clients in
              finding the perfect mortgage solution that aligns with their
              financial goals and aspirations. With a strong emphasis on
              transparency and integrity, we strive to provide a seamless and
              stress-free experience for our clients as they navigate the
              complexities of the mortgage process. At Succedo Mortgage, we
              understand that purchasing a home is one of the most significant
              financial decisions our clients will make. That's why we are
              committed to offering personalized service and tailored solutions
              to meet the unique needs of each individual. Our team works
              diligently to ensure that our clients are well-informed and
              empowered to make informed decisions about their mortgage options.
              With a focus on excellence and customer satisfaction, we take
              pride in our ability to deliver exceptional service and support to
              our clients. Whether you are a first-time homebuyer or a seasoned
              homeowner looking to refinance, our team is here to assist you
              every step of the way. Contact us today to begin your journey
              towards homeownership with a trusted partner by your side.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;