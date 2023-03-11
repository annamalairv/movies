import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/movify.png";

import Button from "../Button";
import NavLinks from "./NavLinks";
const Navbar = ({ setQuery, setopen }) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState(false);

  const setSearchs = (event) => {
    // console.log(event.target.value, "search>>>>>");
    setQuery(event.target.value);
  };

  return (
    <div className={`bg-white h-20`}>
      {!search ? <div className="flex items-center font-medium justify-between">
        <div className=" p-5 md:w-auto w-full flex justify-between">
          <img src={Logo} alt="logo" className="md:cursor-pointer h-9 z-999" />
          <div
            className={`text-3xl z-50 md:hidden ${open ? "text-white" : "text-black"
              }`}
            onClick={() => setOpen(!open)}
          >
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins]">
          <NavLinks />
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Contect us
            </Link>
          </li>
        </ul>
        <div className="md:block hidden pl-30 text-2xl">
          <ion-icon
            onClick={() => setSearch(true)}
            name="search-outline"
          ></ion-icon>
        </div>
        <div className="md:block hidden mr-10">
          <Button setopens={setopen} />
        </div>
        {/* Mobile nav */}
        <ul
          className={`
        md:hidden bg-[#2A2A2A] fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          {/* <li>
            <Link to="/" className="py-7 px-3 inline-block">
              
            </Link>
          </li> */}
          <NavLinks />

          <div className="py-5">
            <Button />
          </div>
        </ul>
      </div> : <div className="p-4 flex flex-row items-center " style={{ animation: `fadeIn 1000ms ease-out` }}><input
        type="text"
        className="block w-full px-4 py-2 text-purple-700 bg-white border rounded-full focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
        placeholder="Search..."
        onChange={setSearchs}
      /> <div className="p-3 flex items-center"><ion-icon size="large"
        onClick={() => setSearch(false)}
        name="close"
      ></ion-icon></div></div>}
    </div>
  );
};

export default Navbar;
