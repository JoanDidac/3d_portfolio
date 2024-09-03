import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo , menu, close } from '../assets' ;
import gear from '../assets/gear.svg';


const Navbar = () => {
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  },   []) ;
  const handleModalToggle = () => {
    setShowModal(!showModal);
  };
  
  return (
    <nav 
     className={`${styles.paddingX} 
     w-full flex items-center py-5 fixed top-0 z-20  
     ${ scrolled ? "bg-[#020018ef]" : 'bg-trasnparent'}`}

    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
<Link 
to="/"
className='flex items-center gap-2'
onClick={() => {
 setActive("");
 window.scrollTo(0,0);
 }
}
>
<img src={logo} alt='logo' className='w-10 h-10 object-contain'/>
<p className=' text-white text-[18px] font-bold cursor-pointer flex '>JoanDîdac &nbsp;<span className='sm:block hidden'>|&nbsp;&nbsp;Web Developer</span></p>
</Link>

{/* Gear Icon for Modal */}
<div className="flex items-center gap-5 gear-icon xl:translate-x-[-2.3em] xs:translate-x-[0.1em]">
          <div
            className="cursor-pointer "
            onClick={handleModalToggle}
          >
             <img
      src={gear}
      alt="Gear Icon"
      className={` w-11 h-11 ${showModal ? 'rotate-90' : ''} hover:rotate-[360deg] hover:scale-150 transition-transform duration-[1000ms] `}
    />
  </div>
          </div>

          {/* Modal */}
          {showModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
              <div className="bg-white p-8 rounded-lg max-w-sm w-full">
                <h2 className="text-lg font-bold mb-4 text-center text-primary">How to Interact</h2>
                <p className="mb-2  text-tertiary">
                  <strong>Desktop:</strong> Click on the 3D elements to turn them and hover over the cards to tilt them to your cursor position.
                </p>
                <p className="mb-2  text-tertiary">
                  <strong>Laptop:</strong> Grab with one finger to move 3D elements, Grab with 2 fingers to move the element on its X and Y Axis.
                </p>
                <p className="mb-4  text-tertiary">
                  <strong>Phone:</strong> Tap and drag the 3D elements to move them, Tap 2 times on the card's corner to tilt them to the tap position.
                </p>
                <button
                  className="w-full py-2 mt-4 bg-black text-white rounded-lg hover:bg-gray-800"
                  onClick={handleModalToggle}
                >
                  Close
                </button>
              </div>
            </div>
          )}

{/* Burger Menu */}
<ul className='list-none hidden sm:flex flex-row gap-10'>
  {navLinks.map((link)=> (
    <li
    key={link.id}
    className={`${
      active === link.title
      ? "text-white"
      : "text-secondary"
    } hover:text-white text[18px] font-medium cursor-pointer`}
    onClick={() => setActive(link.title)}
    >
      <a href={`#${link.id}`}>{link.title} 
      </a>
    </li>
  ))}
</ul>
<div className='sm:hidden flex flex-1 justify-end items-center'> 
<img
src={toggle ? close : menu}
alt='menu'
className='w-[28px] h-[28px] object-contain'
onClick={() => setToggle(!toggle)}

/>
<div className={`${!toggle ? 'hidden' : 'flex' } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
<ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
  {navLinks.map((link)=> (
    <li
    key={link.id}
    className={`${
      active === link.title
      ? "text-white"
      : "text-secondary"
    } font-poppins font-medium cursor-pointer text-[16px]`}
    onClick={() => {
      setToggle(!toggle);
      setActive(link.title)
    }}
    >
      <a href={`#${link.id}`}>{link.title} 
      </a>
    </li>
  ))}
</ul>
</div>
</div>
      </div>
      
    </nav>
  );
};


export default Navbar