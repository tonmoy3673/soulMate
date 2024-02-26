import React from "react";

const About = () => {
  return (
    <div className="hero my-16">
      <div className="hero-content flex-col lg:flex-row">
        <div className="relative md:w-1/2">
          <img
            src={about1}
            alt=""
            className="w-4/5 h-full rounded-xl shadow-2xl"
          />
          <img
            src={about2}
            alt=""
            className="absolute right-5 top-1/2 w-3/5 border-8 rounded-xl mask mask-parallelogram shadow-2xl"
          />
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0">
          <p className="text-3xl font-bold text-orange-600 font-[Courgette]">
            About Us
          </p>
          <h1 className="my-5 text-5xl font-bold font-[Courgette]">
            I am Experienced <br />
            in Wedding Photography
            <br />& Cinematography{" "}
          </h1>
          <p className="py-5">greetings, please visit the site.</p>
          <p className="py-5">I am requesting you to visit My Site.</p>
          <p className="pb-8">
            <span className="font-bold">Address: </span> Chuadanga Sadar,
            Chuadanga,Bangladesh.
          </p>
          <button className="custom-button">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
