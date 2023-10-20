import { Link } from "react-router-dom";
import { IconGo } from "./Heroiconts";

const BoxPreview = (props) => {

    return (
    <div className="w-full h-72 flex flex-row items-start justify-start gap-2 p-2">
      <img
        className="w-1/5 h-52"
        src={props.images.webp.image_url}
        alt={props.title}
      />

      <div className="w-3/4 flex flex-col justify-between gap-5 h-full">
        <div className='flex flex-col gap-2'>
          <div className='flex justify-between items-center'>
          <h2 className='text-xl font-bold'>{props.title}</h2>
          </div>
          <div>
            <p className="line-clamp-6">{props.synopsis}</p>
          </div>
        </div>

        <div className="w-full flex justify-end">
          <Link to={`/movie/${props.mal_id}`}>
            <IconGo />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BoxPreview;