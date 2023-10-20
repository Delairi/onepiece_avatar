import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const VoiceActor = ({person,language}) => {
  return <tr>
    <td className='w-1/12 h-auto'>
      <img 
      src={person.images.jpg.image_url}
      />
    </td>
    <td className='text-center'>{person.name}</td>
    <td className='text-center'>{language}</td>
  </tr>;
};

const Voices = ({voices}) => {
  return (
    <table className="table-normal">
      <thead>
        <th>&nbsp;</th>
        <th>Name</th>
        <th>Language</th>
      </thead>

      <tbody>
        {
          voices !== null && voices.map((item)=>{
            return <VoiceActor key={item.mal_id} {...item} />
          })
        }
      </tbody>
    </table>
  );
};

const EachAppear = (props) => {
  return (
    <div className="flex flex-col items-center justify-center p-2 border border-b-2">
      <h3 className="font-bold text-center">
        <em>{props[props.keyWord].title}</em>
      </h3>
      <img
        className="w-[100px] h-[150px]"
        src={props[props.keyWord].images.webp.image_url}
        alt=""
      />
      <span>Role: {props.role}</span>
    </div>
  );
};

const Appear = ({ data, keyWord }) => {
  const sliceData = data.slice(0, 5);
  return (
    <div className="flex flex-col justify-center items-center border p-2">
      <div className="w-full shadow-md text-center p-1">
        <h3 className="uppercase">{keyWord}</h3>
      </div>
      <div className="flex flex-col gap-2">
        {sliceData.map((item) => {
          return (
            <EachAppear
              keyWord={keyWord}
              key={item.mal_id}
              role={item.role}
              {...item}
            />
          );
        })}
      </div>
    </div>
  );
};

const Character = () => {
  const { idCharacter } = useParams();
  const { data, status, error } = useFetch(`/api/v1/characters/${idCharacter}`);

  if (status === "loading" || data === null || data === undefined)
    return <div>Loading...</div>;
  if (status === "error") return <div>{error}</div>;
  
  return (
    <div className="w-full">
      <div className="w-full flex flex-row justify-start">
        <div className="flex flex-col w-1/6">
          <div className="w-full h-[250px] p-2 b ">
            <img
              className="w-full h-full rounded-full"
              src={data.data.images.webp.image_url}
              alt=""
            />
          </div>

          <div>
            <Appear keyWord={"anime"} data={data.data.anime} />
            <Appear keyWord={"manga"} data={data.data.manga} />
          </div>
        </div>

        <div className="w-full flex flex-col items-start justify-start">
          <div className="w-full flex flex-col gap-2">
            <div className="flex flex-row gap-2 w-full items-center justify-center">
              <h1 className="text-4xl">{data.data.name}</h1>
              <span>({data.data.name_kanji})</span>
            </div>
            <p className="whitespace-pre-wrap text-sm">{data.data.about}</p>
          </div>
          <Voices voices={data.data.voices}/>
        </div>
      </div>
    </div>
  );
};

export default Character;
