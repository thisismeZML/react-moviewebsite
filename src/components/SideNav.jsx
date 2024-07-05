import React from "react";
import { useMovie } from "../hooks/useMovie";
import { HiOutlineXMark } from "react-icons/hi2";
import { IoMdHome } from "react-icons/io";
import { BiSolidCameraMovie } from "react-icons/bi";
import { RiMovie2Fill } from "react-icons/ri";
import { MdLocalMovies } from "react-icons/md";
import { FaHeart } from "react-icons/fa6";
import { MdOutlineRateReview } from "react-icons/md";
import { NavLink } from "react-router-dom";

const SideNav = () => {
  const { isActive, toggleSideBar } = useMovie((state) => ({
    isActive: state.isActive,
    toggleSideBar: state.toggleSideBar,
  }));
  return (
    <div
      className={`fixed right-0 top-0 w-[300px] bg-[#363636] h-screen z-50 duration-300 text-white font-pirmaryFont py-4 px-6 flex flex-col gap-5 md:hidden ${
        isActive ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-2xl tracking-wide">
          Movie<span className="text-[#fe1f2c]">Hub</span>
        </h1>
        <button onClick={toggleSideBar}>
          <HiOutlineXMark className="text-2xl" />
        </button>
      </div>
      <div>
        <h1 className="text-lg mb-3">MENU</h1>
        <div className="flex flex-col gap-2">
          <NavLink
            className={({ isActive }) => (isActive ? "active-nav" : "")}
            to="/"
          >
            <div className="flex items-center gap-6 py-2">
              <button>
                <IoMdHome className="text-xl" />
              </button>
              <p className="active-link">Home</p>
            </div>
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active-nav" : "")}
            to="popular"
          >
            <div className="flex items-center gap-6 py-2">
              <button>
                <BiSolidCameraMovie className="text-xl" />
              </button>
              <p className="active-link">Popular</p>
            </div>
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active-nav" : "")}
            to="toprated"
          >
            <div className="flex items-center gap-6 py-2">
              <button>
                <RiMovie2Fill className="text-xl" />
              </button>
              <p className="active-link">Top Rated</p>
            </div>
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active-nav" : "")}
            to="upcomming"
          >
            <div className="flex items-center gap-6 py-2">
              <button>
                <MdLocalMovies className="text-xl" />
              </button>
              <p className="active-link">Up Comming</p>
            </div>
          </NavLink>
        </div>
      </div>
      <div>
        <h1 className="text-lg mb-3">PERSONAL</h1>
        <div className="flex flex-col gap-2">
          <NavLink
            className={({ isActive }) => (isActive ? "active-nav" : "")}
            to="favMovies"
          >
            <div className="flex items-center gap-6 py-2">
              <button>
                <FaHeart className="text-xl" />
              </button>
              <p className="active-link">Favourites</p>
            </div>
          </NavLink>
          <NavLink>
            <div className="flex items-center gap-6 py-2">
              <button>
                <MdOutlineRateReview className="text-xl" />
              </button>
              <p className="active-link">Reviews</p>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
