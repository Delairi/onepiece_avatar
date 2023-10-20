import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import GeneralData from "./components/GeneralData";
import ListMovies from "./components/ListMovies";
import { BASE_URL } from "../../Urls";
import Query from "./components/Query";

const Home = () => {
  const [DataMovie, setDataMovie] = useState(null)



  return (
    <div className="w-full flex flex-col items-end justify-center">
      
        <Query />
        <ListMovies />
      
    </div>
  );
};

export default Home;
