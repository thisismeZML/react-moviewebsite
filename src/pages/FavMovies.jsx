import React from "react";
import { useMovie } from "../hooks/useMovie";
import { IoMdTrash } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";

const FavMovies = () => {
  const { favMovies, removeFavMovies } = useMovie((state) => ({
    favMovies: state.favMovies,
    removeFavMovies: state.removeFavMovies,
  }));

  const baseImageUrl = "https://image.tmdb.org/t/p/original";
  return (
    <div className="mt-[90px] container mb-[50px] font-pirmaryFont text-white">
      <div className="">
        <h1 className="text-2xl">Your Favourites ({favMovies.length})</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-4 mt-[50px] mb-[50px]">
          {favMovies &&
            favMovies.map((mov) => (
              <div key={mov.id} className="flex flex-col gap-3">
                <NavLink to={`movie/${mov.id}`}>
                  <div>
                    <img src={`${baseImageUrl}${mov.poster_path}`} alt="" />
                  </div>
                </NavLink>
                <button
                  onClick={() => removeFavMovies(mov.id)}
                  className="flex items-center gap-3 bg-[#fd202c] justify-center py-1"
                >
                  <span>
                    <IoMdTrash />
                  </span>
                  <span>Delete</span>
                </button>
              </div>
            ))}
        </div>
        <div>
          {favMovies.length === 0 && (
            <div className="flex flex-col gap-5">
              <p className="text-2xl">
                You have not choosen any Fav Movie Yet!
              </p>
              <NavLink to="..">
                <Button variant="contained" color="error">
                  Browse Here
                </Button>
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FavMovies;
