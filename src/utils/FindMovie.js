export default function FindMovie(movies,id){
    const find = movies.find(movie => parseInt(movie.mal_id) === parseInt(id))
    console.log(find)
    return find

}