import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useSelector } from "react-redux";
import FindMovie from "../../utils/FindMovie";
import Details from "./components/Details";
import Trailer from "./components/Trailer";

const Movie = () => {
  const { mal_id } = useParams();
  // const { data, status, error } = useFetch(`/${mal_id}/characters`);
  const {data,status,error} = useSelector((state) => state.movies);
  const [MovieState, setMovieState] = useState(null)
  
  useEffect(() => {
    console.log(data);
    if(!data) return
    setMovieState(FindMovie(data, mal_id))
  }, [data])
  
  if (status === "loading" || status === "idle" || MovieState === null) return <div>Loading...</div>;
  if(status === 'error') return <div>{error}</div>;
  console.log(MovieState);
  return (
    <div>
      {
        <h1 className="w-full text-center text-2xl font-bold">
          {MovieState.title}
        </h1>
      }
      <div className="flex flex-row gap-2 p-2">
        
        <img src={MovieState.images.webp.image_url} />
        <div className="flex flex-col justify-evenly w-full">
          <div className="flex flex-col gap-2">
            <p className="font-bold underline">Sinopsis</p>
            {MovieState.synopsis ? (
              <p>{MovieState.synopsis}</p>
            ) : (
              <p>No hay sinopsis</p>
            )}
          </div>
          <Details {...MovieState} />
          {MovieState.background && (
            <div className="flex flex-col">
              <p className="font-bold">Background:</p>
              <p>{MovieState.background}</p>
            </div>
          )}
        </div>
      </div>

      {MovieState.trailer.youtube_id && (
        <div className="flex flex-col w-full justify-center items-center">
          <h3 className="text-3xl underline">Trailer</h3>
          <Trailer {...MovieState} />
        </div>
      )}

      {/* {data.data.map((item) => {
        return <div key={item.character.mal_id}>{item.character.name}</div>;
      })} */}
    </div>
  );
};

export default Movie;
