import React from "react";
import profileImg from "../assets/profile.jpg";

const About = () => {
  return (
    <div name='about' className="p-3 flex flex-col justify-between max-w-[1280px] m-auto md:flex-row">
      <img src={profileImg} 
      className='w-[200px] md:w-[300px] m-3 self-center'
      alt="" />
      <p className="text-gray-200 m-3">
        My name is Alin Moldovan and I am a Front-End Developer based
        in Newcastle-upon-Tyne, United Kingdom. I like to build websites from
        scrach using HTML5, CSS3, JavaScript and ReactJs. I am very passionate about
        Web Development. I started to learn web
        development in 2020 because I was courious how the internet, websites
        and web applicatins work. My goal is to learn as much as I can and
        become as good as possible. If you want to own your personal website or
        your business needs a website please contact me.
      </p>
    </div>
  );
};

export default About;
