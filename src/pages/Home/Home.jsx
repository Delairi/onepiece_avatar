import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import GeneralData from "./components/GeneralData";
import ListMovies from "./components/ListMovies";
import { BASE_URL } from "../../Urls";

const Home = () => {
  const [DataMovie, setDataMovie] = useState(null)



  return (
    <div className="w-full flex flex-row items-start justify-start">
      
        <ListMovies />
      
    </div>
  );
};

export default Home;
