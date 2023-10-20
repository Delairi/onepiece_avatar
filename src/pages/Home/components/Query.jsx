import { useDispatch } from "react-redux"
import { BASE_URL } from "../../../Urls"
import { IconSearch } from "../../../components/Heroiconts"
import {useForm} from 'react-hook-form'
import { MoviesThunk } from "../../../reducers/ListReducer"

const Query = () => {

  const {handleSubmit,register} = useForm()
  const dispatch = useDispatch()
  const Submit = async ({query}) => {
    
    const response = await fetch(`${BASE_URL}/api/v1/movies/filter/${query}`)
    const data = await response.json()
    dispatch(MoviesThunk({
      url:`/api/v1/movies/filter/${query}`
    }))
    console.log(data)

  }
  return (
    <form 
    onSubmit={handleSubmit(Submit)}
    className='form-normal p-2'>
      <input 
      {...register('query')}
      className='input-normal'
      placeholder="Search Movie"
      type='text' />      
      <button type='submit' >
        <IconSearch />
      </button>
    </form>
  )
}

export default Query
