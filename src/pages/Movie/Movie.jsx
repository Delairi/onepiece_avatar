import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useDispatch, useSelector } from "react-redux";
import FindMovie from "../../utils/FindMovie";
import Details from "./components/Details";
import Trailer from "./components/Trailer";
import Information from "./components/Information";
import Characters from "./components/Characters";
import SetPreference from "../../utils/SetPreference";
import { IconHeart } from "../../components/Heroiconts";
import AddFavorite from "../../utils/AddFavorite";

const Movie = () => {
  const { mal_id } = useParams();
  const {data,status,error} = useSelector((state) => state.movies);
  const [MovieState, setMovieState] = useState(null)
  const dispatch = useDispatch()
  useEffect(() => {
    if(!data) return
    setMovieState(FindMovie(data, mal_id))
    SetPreference(FindMovie(data, mal_id))
  }, [data])


  if (status === "loading" || status === "idle" || MovieState === null) return <div>Loading...</div>;
  if(status === 'error') return <div>{error.message}</div>;
  return (
    <div>
      
        <div className='flex flex-row gap-2 items-center justify-center'>
        <h1 className="text-center text-2xl font-bold">
          {MovieState.title}
        </h1>
        <button 
        onClick={()=>{

          AddFavorite(MovieState)
          dispatch({
            type:'api/preference',
            payload:{
              url:'/api/v1/movies/last_view'
            }
          })
          alert('Agregado a favoritos')
        }}        
        className='text-[black]'>
          <IconHeart />
        </button>
          </div>
      
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

      <Trailer {...MovieState} /> 

      <Information {...MovieState} />

      <Characters {...MovieState} />
      
    </div>
  );
};

export default Movie;
