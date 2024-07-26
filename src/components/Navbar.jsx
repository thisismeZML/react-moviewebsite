import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoMenuSharp } from "react-icons/io5";
import { CiMenuFries } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { MdOutlineRateReview } from "react-icons/md";
import { useMovie } from "../hooks/useMovie";
import Search from "./Search";

const Navbar = () => {
  const { toggleSideBar } = useMovie((state) => ({
    toggleSideBar: state.toggleSideBar,
  }));

  const [isActive, setIsActive] = useState(false);
  const handleIsActive = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="fixed top-0 right-0 left-0 bg-[#161324] font-primaryFont text-white py-[20px] z-50">
      <nav className="container flex items-center justify-between">
        <div className="flex items-center gap-12">
          <NavLink to="/">
            <h1 className="font-bold text-2xl tracking-wide">
              Movie<span className="text-[#fe1f2c]">Hub</span>
            </h1>
          </NavLink>
          <ul className="items-center gap-8 hidden md:flex">
            <NavLink
              to="/popular"
              className={({ isActive }) => (isActive ? "active-nav" : "")}
            >
              <li className="active-link">Popular</li>
            </NavLink>
            <NavLink
              to="/toprated"
              className={({ isActive }) => (isActive ? "active-nav" : "")}
            >
              <li className="active-link">Top Rated</li>
            </NavLink>
            <NavLink
              to="/upcomming"
              className={({ isActive }) => (isActive ? "active-nav" : "")}
            >
              <li className="active-link">Upcoming</li>
            </NavLink>
          </ul>
        </div>
        <div className="flex gap-6 items-center">
          <Search />
          <div className="relative hidden md:block">
            <button onClick={handleIsActive}>
              <CiMenuFries className="text-[24px]" />
            </button>
            <div
              className={`bg-[#363636] absolute -bottom-[50px] py-2 px-6 right-0 font-primaryFont flex flex-col gap-5 duration-200 ${
                isActive
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-[20px]"
              }`}
            >
              <NavLink to="favMovies" className="flex items-center gap-5">
                <button>
                  <CiHeart />
                </button>
                <button>FAVOURITES</button>
              </NavLink>
            </div>
          </div>
        </div>
        <button onClick={toggleSideBar} className="block md:hidden">
          <IoMenuSharp className="text-[30px]" />
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
