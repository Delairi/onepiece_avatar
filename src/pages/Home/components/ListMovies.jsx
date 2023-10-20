import { useDispatch, useSelector } from "react-redux";
import BoxPreview from "../../../components/Boxex";
import useFetch from "../../../hooks/useFetch";
import { useEffect } from "react";
import { setMovie } from "../../../reducers/ListReducer";

const ListMovies = (props) => {
 
  const {status,data,error} = useSelector((state) => state.movies);
  console.log(status,data,error)
    if (status === "loading" || status === "idle" || data === null ) return <div>Loading...</div>;
  return (
    <div className="w-full h-[calc(100vh-40px)] overflow-auto flex flex-col gap-2">
    {data !== null &&
      data.map((item) => {
        return <BoxPreview
        key={item.mal_id}
        {...item} />;
      })}
  </div>
  )
}

export default ListMovies
