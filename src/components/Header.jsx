import React from "react";
import { Link } from "react-scroll";
import {AiFillFacebook,AiFillInstagram,AiFillTwitterCircle,AiFillLinkedin} from 'react-icons/ai'

function Header() {
  return (
    <div
      name="home"
      className="w-full  h-screen flex flex-col items-middle text-white px-3"
    >
      <div className="flex align-middle justify-center my-2 max-w-[450px]">
        <a href="https://www.facebook.com/alinmoldovan86/" target='blank'><AiFillFacebook className="text-xl mr-2 md:mr-4"/></a>
        <a href="https://www.instagram.com/aldev616/" target='blank'><AiFillInstagram className="text-xl mr-2 md:mr-4"/></a>
        <a href="https://twitter.com/kinadigitalstu1" target='blank'><AiFillTwitterCircle className="text-xl mr-2 md:mr-4"/></a>
        <a href="https://www.linkedin.com/in/alin-moldovan-9a4776171/" target='blank'><AiFillLinkedin className="text-xl mr-2 md:mr-4"/></a>
        
      </div>
      <div className="flex flex-col  m-auto items-left p-auto align-middle ">
        <p className="md:text-4xl">Hi, my name is </p>
        <h1 className="text-4xl md:text-[5rem] font-bold tracking-widest my-2 md:my-5 ">
          Alin Moldovan
        </h1>
        <h2 className="md:text-2xl mb-2">I'm a Front-End Developer</h2>
        <p>You bring the problem. I bring the solution</p>
      </div>
      <div className="flex justify-between align-middle m-auto ">
        <button className=" self-center border-2 py-1 px-4 mr-3 rounded-md text-white font-bold">
          <Link to="about" smooth={true} duration={500}>
            About me
          </Link>
        </button>
        <button className="bg-white text-black py-1 px-4 rounded-md font-bold"><Link to='work' smooth={true} duration={500}>
            My work
          </Link></button>
      </div>
    </div>
  );
}

export default Header;
