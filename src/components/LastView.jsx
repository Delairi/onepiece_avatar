import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const View = (props) => {
    return (
        <Link to={`/movie/${props.mal_id}`} className='flex flex-col gap-2'>
                <img src={props.image} alt={props.title} />
                <h5 className='italic'>{props.title}</h5>
        </Link>
    )

}

const LastView = () => {

    const {data,status,error} = useSelector(state => state.preference)

    if(status === 'loading') return <h1>Loading...</h1>
    if(status === 'error' || data === null || data.lastView.length===0) return 

  return (
    <div className='w-1/6   h-full flex flex-col items-start justify-start p-3 m-2 gap-5 shadow-sm shadow-black'>
        
        
        {
          data !== null && <>
          <h3 className='text-xl text-center w-full'>Last Views</h3>
          {

          data.lastView.map((item,index)=>{
                return <View key={index+'lastview'} {...item} />
            })
          }
          </> 
        }
    </div>
  )
}

export default LastView
