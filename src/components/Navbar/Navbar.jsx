import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/movify.png";
import Button from "../Button";
import NavLinks from "./NavLinks";

const Navbar = ({
  query,
  setQuery,
  setopen,
  language,
  languageList,
  selectLang,
  isQueryTypeMovieName,
  setQueryType,
}) => {
  let year = new Date().getFullYear();
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState(false);

  const setSearchs = (event) => {
    let que = event.target.value;
    if (isQueryTypeMovieName || (!isQueryTypeMovieName && que.length <= 4))
      setQuery(que)
  };

  return (
    <div className={`bg-white h-20`}>
      {!search ? (
        <div className="flex flex-1 items-center font-medium">
          <div className=" p-5 md:w-auto w-full flex justify-between">
            <img
              src={Logo}
              alt="logo"
              className="md:cursor-pointer h-9 z-999"
            />
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
              <Link to="/watched" className="py-7 px-3 inline-block">
                Watched
              </Link>
            </li>
          </ul>

          <div className="flex-1 flex flow-row justify-end items-center">
            <LanguageSection {...{ language, languageList, selectLang }} />
            <div className="md:block hidden px-5 text-2xl  cursor-pointer" onClick={() => setSearch(true)}>
              <ion-icon
                name="search-outline"
              ></ion-icon>
            </div>

            <div className="md:block hidden px-5">
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
          </div>
        </div>
      ) : (
        <div
          className="p-4 flex flex-row items-center "
          style={{ animation: `fadeIn 1000ms ease-out` }}
        >

          <div className="text-sm flex-1 flex flex-row items-center"> <input autoFocus={true}
            type={isQueryTypeMovieName ? "text" : "number"} value={query}
            className="block w-full px-2 py-2 text-purple-700 bg-white border rounded-full focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="Search by"
            onChange={setSearchs}
          />
            {query && query.length != 4 && !isQueryTypeMovieName ? <div className="text-xs text-red-400 px-3 whitespace-nowrap">Enter a valid year</div> : null}
          </div>

          <div className="mx-2 border rounded-full cursor-pointer flex flex-row whitespace-nowrap">
            <div onClick={() => setQueryType(true)} className="p-1 border-r-2 rounded-l-full px-4" style={{ backgroundColor: isQueryTypeMovieName ? '#9352b3' : 'white', color: isQueryTypeMovieName ? 'white' : 'black' }}>Movie Name</div>
            <div onClick={() => setQueryType(false)} className="p-1 px-4 rounded-r-full" style={{ backgroundColor: isQueryTypeMovieName ? 'white' : '#9352b3', color: isQueryTypeMovieName ? 'black' : 'white' }}>Year</div>
          </div>

          <div className="p-3 flex items-center cursor-pointer">
            <ion-icon
              size="large"
              onClick={() => { setSearch(false), setQuery("") }}
              name="close"
            ></ion-icon>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;


const LanguageSection = ({ language, languageList, selectLang }) => {
  return (
    <div className="px-5 ">
      {languageList && languageList.length ? (
        <div className="flex flex-row items-center">
          <ion-icon name="globe-outline" style={{ zoom: 1.2 }}></ion-icon>
          <select onChange={selectLang} value={language} className="ml-1 w-24">
            {languageList.map((e, i) => {
              return (
                <option key={i.toString()} value={e.iso_639_1}>
                  {e.name}
                </option>
              );
            })}
          </select>
        </div>
      ) : null}
    </div>
  );
};
