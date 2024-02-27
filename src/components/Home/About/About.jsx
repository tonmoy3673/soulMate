import React from "react";
import Image from "next/image";
import img2 from "@/Images/AboutImage/about2.jpg";
import img1 from "@/Images/AboutImage/about1.jpg";

const About = () => {
  return (
    <div className="hero my-16">
      <div className="hero-content flex-col lg:flex-row">
        <div className="relative md:w-1/2">
          <Image
            src="/src/Images/AboutImage/about1.jpg"
            alt=""
            width={800}
            height={600}
            className="w-4/5 h-full rounded-xl shadow-2xl"
          />
          <img
            src="/src/Images/AboutImage/about2.jpg"
            alt=""
            width={800}
            height={600}
            className="w-4/5 h-full rounded-xl shadow-2xl"
          />
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0">
          <p className="text-3xl font-bold text-orange-600 font-[Courgette]">
            About Us
          </p>
          <h1 className="my-5 text-xl font-bold font-[Courgette]">
            Soul Mate is an innovative online marriage platform designed to
            connect individuals seeking meaningful and lasting relationships.
            With a user-friendly interface and advanced matchmaking algorithms,
            Soul Mate empowers users to discover their perfect life partner by
            fostering genuine connections based on shared values, interests, and
            compatibility. Explore a world of possibilities as you embark on
            your journey to find true love with Soul Mate
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
