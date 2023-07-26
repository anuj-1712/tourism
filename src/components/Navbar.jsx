import React, { useState } from "react";
import { IconContext } from "react-icons";
import {FiHome} from "react-icons/fi"
import {GiHamburgerMenu} from "react-icons/gi"

export default function Navbar() {
  const [open , setOpen] = useState(false)

  const toggleNav = () =>{
    if(!open){
      document.getElementById("collapse-bar").style.display = "flex"
      setOpen(true)
    }
    else if(open){
      document.getElementById("collapse-bar").style.display = "none"
      setOpen(false)
    }
  }
  return (
    <>
      <header className="flex justify-between items-center h-[70px] w-full px-4 md:px-8 lg:px-12 bg-[#DDE6ED] fixed top-0">
        <img src="https://thrilltourism.com/assets/images/logo-dark.png" className="lg:block hidden" />
        <div className="lg:hidden flex gap-4 items-center">
        <img src="https://thrilltourism.com/assets/images/logo-dark-sm.png"  className="h-6 w-6"/>
        <IconContext.Provider value={{size:"1.5em"}}>
        <GiHamburgerMenu onClick={toggleNav}/>
        </IconContext.Provider>
        </div>
        <div className="flex gap-4">
          <button className="bg-black rounded-md px-2 py-2 lg:text-xl md:text-sm text-xs hover:bg-white hover:text-black text-white font-[600]">Near me</button>
          <button className="bg-black rounded-md px-2 py-2 lg:text-xl md:text-sm text-xs hover:bg-white hover:text-black text-white font-[600]">Add a Listing</button>
        </div>
      </header>

      {/* normal navbar  */}
      <nav className="lg:flex hidden justify-center items-center lg:gap-12 w-full px-12 py-4 bg-[#F0F0F0]">
        <a className="flex items-center gap-2 text-sm hover:text-blue-300" href="/"><FiHome /> Home</a>
        <a className="flex items-center gap-2 text-sm hover:text-blue-300" href="/"><GiHamburgerMenu/> All Listings</a>
        <a className="text-sm hover:text-blue-300" href="/">Blogs</a>
        <a className="text-sm hover:text-blue-300" href="/">Contact us</a>
      </nav>

      {/* collapse navbar */}
        <nav className="lg:hidden hidden fixed top-[70px] flex-col justify-start gap-4 w-full px-12 py-4 bg-[#F0F0F0] delay-[3s]" id="collapse-bar">
        <a className="flex items-center gap-2 text-sm hover:text-blue-300" href="/"><FiHome /> Home</a>
        <a className="flex items-center gap-2 text-sm hover:text-blue-300" href="/"><GiHamburgerMenu /> All Listings</a>
        <a className="text-sm hover:text-blue-300" href="/">Blogs</a>
        <a className="text-sm hover:text-blue-300" href="/">Contact us</a>
      </nav>
    </>
  );
}
