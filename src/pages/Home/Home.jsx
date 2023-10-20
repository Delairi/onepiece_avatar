import LastView from "../../components/LastView";
import ListMovies from "./components/ListMovies";
import Query from "./components/Query";

const Home = () => {

  return (
    <div className="w-full flex flex-col items-end justify-center">
      
        <Query />
        <div className='flex flex-row w-full'>
        <ListMovies />
        <LastView />
        </div>
      
    </div>
  );
};

export default Home;
