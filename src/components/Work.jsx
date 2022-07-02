import React from "react";
import countriesProjectImg from "../assets/countries-project.jpg";
import digitalStudioProjectImg from "../assets/digital-studio-project.jpg";
import estateProjectImg from "../assets/estate-project.jpg";
import moviesProjectImg from "../assets/movies-project.jpg";
import photographyProjectImg from "../assets/photography-project.jpg";
import shoppingCartProjectImg from "../assets/shopping-cart-project.jpg";
import weatherProjectImg from "../assets/weather-project.jpg";
import { FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiFirebase } from "react-icons/si";

const Work = () => {
  return (
    <div className="my-8 max-w-[1280px] m-auto">
      <h1 className="text-gray-200 text-4xl ml-4">My work</h1>
       <div className="text-gray-200 grid gap-2 md:grid-cols-3  justify-center align-middle m-auto" name="work">
      <div className="m-2">
        <div className="relative">
          <img src={countriesProjectImg} alt="" />
          <div className="bg-gradient-to-b from-cyan-500/30 to-blue-500 h-full absolute bottom-0 w-full">
            <div className="absolute bottom-0 w-full justify-start">
              <p className="text-xl m-2">Countries project</p>
              <div className="text-xl m-2 flex justify-start">
                <FaReact className="m-2" />
                <SiTailwindcss className="m-2" />
              </div>
              <div className="flex justify-start m-3">
                <button className="bg-blue-800 py-1 px-5 m-1 rounded-md">
                  <a
                    href="https://countries-project12.netlify.app/"
                    target="blank"
                  >
                    Demo
                  </a>
                </button>
                <button className="bg-blue-800 py-1 px-5 m-1 rounded-md">
                  <a
                    href="https://github.com/Slake37/CountriesProject"
                    target="blank"
                  >
                    Code
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="m-2">
        <div className="relative">
          <img src={digitalStudioProjectImg} alt="" />
          <div className="bg-gradient-to-b from-cyan-500/30 to-blue-500 h-full absolute bottom-0 w-full">
            <div className="absolute bottom-0 w-full justify-start">
              <p className="text-xl m-2">Digital Studio project</p>
              <div className="text-xl m-2 flex justify-start">
                <FaHtml5 className="m-2" />
                <FaCss3Alt className="m-2" />
                <SiJavascript className="m-2" />
              </div>
              <div className="flex justify-start m-3">
                <button className="bg-blue-800 py-1 px-5 m-1 rounded-md">
                  <a href="https://www.miamoldophoto.com" target="blank">
                    Demo
                  </a>
                </button>
                <button className="bg-blue-800 py-1 px-5 m-1 rounded-md">
                  <a
                    href="https://github.com/Slake37/Mia-Moldovan-Photography"
                    target="blank"
                  >
                    Code
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="m-2">
        <div className="relative">
          <img src={estateProjectImg} alt="" />
          <div className="bg-gradient-to-b from-cyan-500/30 to-blue-500 h-full absolute bottom-0 w-full">
            <div className="absolute bottom-0 w-full justify-start">
              <p className="text-xl m-2">House Market Project</p>
              <div className="text-xl m-2 flex justify-start">
                <FaReact className="m-2" />
                <FaCss3Alt className="m-2" />
                <SiFirebase className="m-2" />
              </div>
              <div className="flex justify-start m-3">
                <button className="bg-blue-800 py-1 px-5 m-1 rounded-md">
                  <a
                    href="https://house-marketplace-rust-nine.vercel.app/"
                    target="blank"
                  >
                    Demo
                  </a>
                </button>
                <button className="bg-blue-800 py-1 px-5 m-1 rounded-md">
                  <a
                    href="https://github.com/Slake37/house_market"
                    target="blank"
                  >
                    Code
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="m-2">
        <div className="relative">
          <img src={moviesProjectImg} alt="" />
          <div className="bg-gradient-to-b from-cyan-500/30 to-blue-500 h-full absolute bottom-0 w-full">
            <div className="absolute bottom-0 w-full justify-start">
              <p className="text-xl m-2">Movies Project</p>
              <div className="text-xl m-2 flex justify-start">
                <FaReact className="m-2" />
                <SiTailwindcss className="m-2" />
              </div>
              <div className="flex justify-start m-3">
                <button className="bg-blue-800 py-1 px-5 m-1 rounded-md">
                  <a
                    href="https://react-movies-project-seven.vercel.app/"
                    target="blank"
                  >
                    Demo
                  </a>
                </button>
                <button className="bg-blue-800 py-1 px-5 m-1 rounded-md">
                  <a
                    href="https://github.com/Slake37/react-movies-project"
                    target="blank"
                  >
                    Code
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="m-2">
        <div className="relative">
          <img src={photographyProjectImg} alt="" />
          <div className="bg-gradient-to-b from-cyan-500/30 to-blue-500 h-full absolute bottom-0 w-full">
            <div className="absolute bottom-0 w-full justify-start">
              <p className="text-xl m-2">House Market Project</p>
              <div className="text-xl m-2 flex justify-start">
                <FaReact className="m-2" />
                <FaCss3Alt className="m-2" />
                <SiFirebase className="m-2" />
              </div>
              <div className="flex justify-start m-3">
                <button className="bg-blue-800 py-1 px-5 m-1 rounded-md">
                  <a
                    href="https://house-marketplace-rust-nine.vercel.app/"
                    target="blank"
                  >
                    Demo
                  </a>
                </button>
                <button className="bg-blue-800 py-1 px-5 m-1 rounded-md">
                  <a
                    href="https://github.com/Slake37/house_market"
                    target="blank"
                  >
                    Code
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="m-2">
        <div className="relative">
          <img src={shoppingCartProjectImg} alt="" />
          <div className="bg-gradient-to-b from-cyan-500/30 to-blue-500 h-full absolute bottom-0 w-full">
            <div className="absolute bottom-0 w-full justify-start">
              <p className="text-xl m-2">Shopping List Project</p>
              <div className="text-xl m-2 flex justify-start">
                <FaReact className="m-2" />
                <FaCss3Alt className="m-2" />
              </div>
              <div className="flex justify-start m-3">
                <button className="bg-blue-800 py-1 px-5 m-1 rounded-md">
                  <a
                    href="https://my-shopping-list1.netlify.app/"
                    target="blank"
                  >
                    Demo
                  </a>
                </button>
                <button className="bg-blue-800 py-1 px-5 m-1 rounded-md">
                  <a
                    href="https://github.com/Slake37/my-shopping-list"
                    target="blank"
                  >
                    Code
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="m-2">
        <div className="relative">
          <img src={weatherProjectImg} alt="" />
          <div className="bg-gradient-to-b from-cyan-500/30 to-blue-500 h-full absolute bottom-0 w-full">
            <div className="absolute bottom-0 w-full justify-start">
              <p className="text-xl m-2">Weather Project</p>
              <div className="text-xl m-2 flex justify-start">
                <FaReact className="m-2" />
                <FaCss3Alt className="m-2" />
              </div>
              <div className="flex justify-start m-3">
                <button className="bg-blue-800 py-1 px-5 m-1 rounded-md">
                  <a
                    href="https://react-weather-app-two-ruddy.vercel.app/"
                    target="blank"
                  >
                    Demo
                  </a>
                </button>
                <button className="bg-blue-800 py-1 px-5 m-1 rounded-md">
                  <a
                    href="https://github.com/Slake37/React_Weather-App"
                    target="blank"
                  >
                    Code
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    </div>
   
  );
};

export default Work;
