import axios from "axios";
import React, { useEffect, useState } from "react";
import { apiKey } from "../api/apiKey";
import { movieAPI } from "../api/movieApi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Button } from "@mui/material";
import { NavLink, useSearchParams } from "react-router-dom";
import PaginationMovie from "../components/PaginationMovie";
import Skeletons from "../components/Skeletons";

const PopularPage = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [movieBanner, setMovieBanner] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const moviePerPage = 12;

  const indexOfLastPage = currentPage * moviePerPage;
  const indexOfFirstPage = indexOfLastPage - moviePerPage;
  const currentMovies = popularMovies.slice(indexOfFirstPage, indexOfLastPage);

  const paginate = (number) => {
    setCurrentPage(number);
  };

  const [searchTerms, setSearchTerm] = useSearchParams();

  const fetchPopularMovies = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await movieAPI.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
      );
      setPopularMovies(res.data.results);
    } catch (error) {
      setError("Failed to fetch popular movies");
    } finally {
      setIsLoading(false);
    }
  };

  const fetchMovies = async () => {
    const res = await movieAPI.get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`
    );
    setMovieBanner(res.data.results.slice(8, 15));
  };

  useEffect(() => {
    fetchPopularMovies();
    fetchMovies();
  }, []);

  const baseImageUrl = "https://image.tmdb.org/t/p/original";

  const loadMoreMovies = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const skeletons = Array.from({ length: 12 }, (_, index) => index);

  return (
    <div>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {movieBanner.map((movie) => (
          <SwiperSlide key={movie.id}>
            <div className="relative image-container mb-0 h-[30vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] xl:h-[80vh] mt-[70px]">
              <img
                className="w-full h-full object-cover"
                src={`${baseImageUrl}${movie.backdrop_path}`}
                alt={movie.title}
              />
              <div className="container absolute inset-0 flex items-center justify-start text-white z-30  p-4">
                <div className=" max-w-[600px] flex flex-col gap-3">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                    {movie.original_title}
                  </h1>
                  <p className="line-clamp-3 text-base sm:text-lg md:text-xl">
                    {movie.overview}
                  </p>
                  <p className="text-sm sm:text-base md:text-lg">
                    <span>{movie.release_date}</span> |{" "}
                    <span>{movie.original_language}</span>
                  </p>
                  <NavLink to={`movie/${movie.id}`}>
                    <Button variant="contained" color="error">
                      Watch Now
                    </Button>
                  </NavLink>
                </div>
              </div>
              <div className=" absolute inset-0 flex items-center justify-start text-white z-20 bg-gradient-to-t from-black via-transparent to-transparent p-4"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-4 container mt-[50px] mb-[50px]">
        {isLoading
          ? skeletons.map((ske,index) => <Skeletons key={index}/>)
          : currentMovies.map((movie) => (
              <div key={movie.id}>
                <NavLink to={`movie/${movie.id}`}>
                  <div>
                    <img src={`${baseImageUrl}${movie.poster_path}`} alt="" />
                  </div>
                </NavLink>
              </div>
            ))}
      </div>
      <div className="text-white flex flex-col items-center mb-4">
        <PaginationMovie
          paginate={paginate}
          moviePerPage={moviePerPage}
          totalMovies={popularMovies.length}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default PopularPage;
