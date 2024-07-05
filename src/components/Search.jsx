import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { MdClear } from "react-icons/md";
import { useMovie } from "../hooks/useMovie";
import { NavLink } from "react-router-dom";

const Search = () => {
  const { searchFilter, searchMovies } = useMovie((state) => ({
    searchFilter: state.searchFilter,
    searchMovies: state.searchMovies,
  }));

  const [isActive, setIsActive] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const handleClear = () => {
    setSearchValue("");
  };

  const handleMovieSelect = () => {
    setIsActive(false);
    setSearchValue("");
  };

  useEffect(() => {
    if (searchValue) {
      searchFilter(searchValue);
    }
  }, [searchValue, searchFilter]);

  return (
    <div className="md:flex items-center gap-3 hidden relative">
      <div
        className={`relative overflow-hidden transition-all duration-300 ${
          isActive ? "w-[300px]" : "w-0"
        }`}
      >
        <input
          type="search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className="bg-transparent focus-visible:outline-none w-full border-b placeholder:text-sm"
          placeholder="Search Movies"
        />
        {searchValue && (
          <button
            onClick={handleClear}
            className="absolute right-1 top-0 text-lg"
          >
            <MdClear />
          </button>
        )}
      </div>
      {searchValue && (
        <div className="absolute left-0 top-full mt-2 bg-[#363636] w-full p-3 overflow-y-auto max-h-[300px] z-10 shadow-lg">
          {searchMovies.length > 0 ? (
            searchMovies.map((mov) => (
              <NavLink
                to={`movie/${mov.id}`}
                key={mov.id}
                className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded"
                onClick={handleMovieSelect}
              >
                {mov.poster_path && (
                  <img
                    src={`https://image.tmdb.org/t/p/w92${mov.poster_path}`}
                    alt={mov.title}
                    className="w-12 h-auto"
                  />
                )}
                <p>{mov.title}</p>
              </NavLink>
            ))
          ) : (
            <div className="p-2 text-gray-400">No movies found</div>
          )}
        </div>
      )}
      <button onClick={handleClick}>
        <CiSearch className="text-2xl" />
      </button>
    </div>
  );
};

export default Search;
