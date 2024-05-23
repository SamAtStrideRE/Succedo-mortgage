import React from "react";
import Heading from "../../common/Heading";
import "./Featured.css";
import FeaturedCard from "./FeaturedCard";

const Featured = () => {
  return (
    <>
      <section className="featured background">
        <Heading
          className="welcome"
          title="New Here?"
          subtitle="Welcome to Succedo Mortgage, where homeownership happens in a snap.

Are you tired of hidden fees and indefinite waiting? Succedo Mortgage provides the best insurance at the most affordable costs, with no hidden fees. With us, the savings never end, earning you points for your future.

Why settle for less when Succedo Mortgage offers flexibility and value? Join us today to begin your road towards homeownership!"
        />
        <br />
        <br />
        <div className="container">
          <Heading
            title="Cheaper, Faster, Easier is the Better way"
          />
          <FeaturedCard />
        </div>
      </section>
    </>
  );
};

export default Featured;
