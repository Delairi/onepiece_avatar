import { useSelector } from "react-redux";
import BoxPreview from "../../../components/Boxex";
import {Loader} from '../../../components/Loader'
import Error from "../../../components/Error";

const ListMovies = (props) => {
 
  const {status,data,error} = useSelector((state) => state.movies);
    if (status === "loading" || status === "idle" || data === null ) return <Loader />
    if (status === "error") return <Error error={error} />
  return (
    <div className="w-full h-[calc(100vh-40px)] flex flex-col gap-2">
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
