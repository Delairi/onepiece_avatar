import React, { useEffect } from "react";
import { BASE_URL } from "../../../Urls";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CharacterThunk } from "../../../reducers/CharactersReducer";

const VoiceActor = (props) => {
  console.log(props.voice_actors[0]);
  return (
    <div>
    <div className='flex justify-center'>
            <span className="text-center text-xs">Voice:</span>
        </div>
    <div className="w-full flex flex-row justify-between shadow-xl p-4">
      {
        props.voice_actors[0]  && <img
        className="w-12 h-12"
        src={props.voice_actors[0].person.images.jpg.image_url}
        alt={props.voice_actors[0].name}
      />
      }
      {
         props.voice_actors[0]  && <div className="flex flex-col items-end justify-center">
         <span className="font-bold">{props.voice_actors[0].person.name}</span>
         <span className="italic">{props.voice_actors[0].language}</span>
       </div>
      }
      
        
      
    </div>
    </div>
  );
};

const Character = (props) => {
  return (
    <div className="w-1/4 flex items-center justify-center">
      <Link 
      to={`/movie/${props.idMovie}/character/${props.character.mal_id}`}
      className="p-2  ">
        <h4 className="font-bold text-xl text-center p-2">
          {props.character.name}
        </h4>
        <img
          className="w-64 h-96 p-2 object-cover border-t-2 rounded-t-md"
          src={props.character.images.webp.image_url}
          alt={props.character.name}
        />

        <VoiceActor {...props} />
      </Link>
    </div>
  );
};

const Characters = () => {
  const { mal_id } = useParams();
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.characters);
    
  useEffect(() => {
    GetCharacters();
  }, []);

  const GetCharacters = async () => {
    dispatch(
      CharacterThunk({
        url: `anime/${mal_id}/characters`,
      })
    );
  };
  console.log(data, status, error);
  if (
    status === "loading" ||
    status === "idle" ||
    data === null ||
    data === undefined
  )
    return <div>Loading...</div>;
  if (status === "error") return <div>{error.message}</div>;
  console.log(data, status);
  return (
    <div className="flex flex-row flex-wrap items-center justify-start">
      {data.map((item) => {
        return <Character key={item.character.mal_id} idMovie={mal_id} {...item} />;
      })}
    </div>
  );
};

export default Characters;
