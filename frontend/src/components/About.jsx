import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is FUN.</p>
            </div>
            <p className="mid">
              Welcome to AQUAWorld, where every splash is a smile
              and every moment is an adventure! Nestled in GUJARAT, we're
              more than just a destination; we're a haven of aquatic excitement
              and family fun. With a diverse array of thrilling slides, lazy
              rivers, and interactive attractions, we invite you to dive into a
              world where memories are made and laughter echoes through every
              wave. Whether you're seeking heart-pounding thrills or tranquil
              relaxation, our park offers something for everyone
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="img3.jpeg" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
