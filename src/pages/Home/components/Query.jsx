import { useDispatch } from "react-redux"
import { IconSearch } from "../../../components/Heroiconts"
import {useForm} from 'react-hook-form'
import { MoviesThunk } from "../../../reducers/ListReducer"

const Query = () => {

  const {handleSubmit,register,reset} = useForm()
  const dispatch = useDispatch()
  const Submit = async ({query}) => {
    if(query === '') return
    dispatch(MoviesThunk({
      url:`/api/v1/movies/filter/${query}`
    }))
    reset()
  }


  return (
    <form 
    onSubmit={handleSubmit(Submit)}
    className='form-normal p-2'>
      <input 
      {...register('query')}
      className='input-normal'
      autoComplete="off"
      placeholder="Search Movie"
      type='text' />
      <button type='submit' >
        <IconSearch />
      </button>
    </form>
  )
}

export default Query
