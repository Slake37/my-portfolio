import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOn, setIsOn] = useState(true);

   

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="flex justify-between w-full sticky top-0 h-[80px] backdrop-blur-sm items-center z-10 align-middle text-center px-5 text-black text-sm ">
      <h1 className="text-gray-200">Alin Moldovan</h1>
      {isOn ? (
        <GiHamburgerMenu
          onClick={handleToggle}
          className="self-center cursor-pointer md:hidden text-xl text-white z-50"
        />
      ) : (
        <AiOutlineClose className="self-center cursor-pointer md:hidden text-xl z-50" onClick={handleToggle} />
      )}

      {/* menu */}
      <ul className='hidden md:flex items-center text-gray-200'>
        <li className="mr-5 cursor-pointer">
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="mr-5 cursor-pointer">
          <Link to='about' smooth={true} duration={500}>
            About me
          </Link>
        </li>
        <li className="mr-5 cursor-pointer">
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="mr-5 cursor-pointer">
          <Link to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link to='contact' smooth={true} duration={500}>
            Contact me
          </Link>
        </li>
      </ul>
        {/* hamburger menu */}
        <ul
        className={
          isOn
            ? 'hidden'
            : 'absolute md:hidden top-0 left-0 w-full h-screen bg-blue-500/90 z-10 flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl cursor-pointer'>
          <Link onClick={handleToggle} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl cursor-pointer'>
          {' '}
          <Link onClick={handleToggle} to='about' smooth={true} duration={500}>
            About me
          </Link>
        </li>
        <li className='py-6 text-4xl cursor-pointer'>
          {' '}
          <Link onClick={handleToggle} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl cursor-pointer'>
          {' '}
          <Link onClick={handleToggle} to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='py-6 text-4xl cursor-pointer'>
          {' '}
          <Link onClick={handleToggle} to='contact' smooth={true} duration={500}>
            Contact me
          </Link>
        </li>
      </ul>

    </div>
  );
};

export default Navbar;
