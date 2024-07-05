import React, { useEffect, useState } from "react";
import { movieAPI } from "../api/movieApi";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { apiKey } from "../api/apiKey";

const ShowCase = () => {
  const [showCaseMovie, setShowCaseMovie] = useState(null);
  const [error, setError] = useState(null);

  const fetchMovie = async () => {
    try {
      const res = await movieAPI.get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`
      );
      console.log("Fetched data:", res.data); // Log the fetched data

      if (res.data.results.length === 0) {
        setError("No movies found.");
      } else {
        setShowCaseMovie(res.data.results[7]); // Set the first movie from the now-playing list
      }
    } catch (error) {
      console.error("Error fetching movie:", error);
      setError("An error occurred while fetching movies.");
    }
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  const baseImageUrl = "https://image.tmdb.org/t/p/original";

  if (error) {
    return <div>{error}</div>;
  }

  if (!showCaseMovie) {
    return <div>Loading...</div>;
  }

  if (!showCaseMovie.backdrop_path) {
    console.error("backdrop_path is undefined for the fetched movie");
    return <div>Error loading movie image.</div>;
  }

  return (
    <div className="relative h-full w-full">
      <img
        className="h-full w-full object-cover object-top select-none"
        src={`${baseImageUrl}${showCaseMovie.backdrop_path}`}
        alt={showCaseMovie.title}
      />
      <div className="container absolute inset-0 flex items-center justify-start text-white z-30">
        <div className="max-w-md flex flex-col gap-3 text-center select-none">
          <h1 className="text-3xl font-bold">{showCaseMovie.original_title}</h1>
          <p className="line-clamp-3">{showCaseMovie.overview}</p>
          <p>
            <span>{showCaseMovie.release_date}</span> | <span>{showCaseMovie.original_language}</span>
          </p>
          <NavLink to={`movie/${showCaseMovie.id}`}>
            <Button variant="contained" color="error">
              Watch Now
            </Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ShowCase;