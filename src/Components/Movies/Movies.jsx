import React, { useEffect } from "react";
import style from "./Movies.module.css";
import Header from "../Header/Header";
import axios from "axios";
import { useState } from "react";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const urlImagePrefix = "https://image.tmdb.org/t/p/w500";

  async function getTrendingMovies() {
    try {
      const { data } = await axios.get(
        "https://api.themoviedb.org/3/trending/movie/week?api_key=5e22baf739db98677fde17c03d9807b0"
      );
      setMovies(data.results);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getTrendingMovies();
  }, []);
  return (
    <>
      <Header title="Trending movies" description="" height="50" />
      <div className="container">
        <h2 className="my-5">Movies</h2>

        <div className="row">
          {movies.map((movie, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card">
                <img
                  src={urlImagePrefix + movie.poster_path}
                  alt={movie.overview}
                  className="card-img-top "
                />
                <div className="card-body">
                  <h5 className="card-title ">
                    {movie.title.split(" ").slice(0, 4).join(" ")}
                  </h5>
                  <p className="card-text overflow-hidden text-truncate">
                    {movie.overview}
                  </p>
                  <p>Votes: {movie.vote_average}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
