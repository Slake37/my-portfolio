import React from 'react'
import { FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiAdobexd } from "react-icons/si";

const Technologies = () => {
  return (
    <div className='m-auto max-w-[1280px] '>
    <h1 className='text-gray-200 text-4xl ml-4 '>Skills</h1>
    <div className='text-4xl md:text-6xl grid grid-cols-3 p-5 md:grid-cols-6 gap-5   '>
        <FaHtml5 className='text-gray-200 text-center'/>
        <FaCss3Alt className='text-gray-200'/>
        <SiJavascript className='text-gray-200'/>
        <FaReact className='text-gray-200'/>
        <SiTailwindcss className='text-gray-200'/>
        <SiAdobexd className='text-gray-200'/>
    </div>
    </div>
 
  )
}

export default Technologies