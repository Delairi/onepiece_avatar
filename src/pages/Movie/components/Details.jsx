import React from "react";

const Details = (movie) => {
  return (
    <div className="flex flex-row justify-evenly w-full">
      {movie.rank && <span className="span-movie-details">Rank: #{movie.rank}</span>}
      {movie.popularity && (
        <span className="span-movie-details">Popularidad: #{movie.popularity}</span>
      )}
      {movie.score && (
        <span className="span-movie-details">Score: {movie.scored_by}</span>
      )}
      {movie.type && <span className="span-movie-details">Tipo: {movie.type}</span>}
      {movie.episodes && (
        <span className="span-movie-details">Episodes: {movie.episodes}</span>
      )}
      {movie.duration && (
        <span className="span-movie-details">duracion: {movie.duration}</span>
      )}
    </div>
  );
};

export default Details;
