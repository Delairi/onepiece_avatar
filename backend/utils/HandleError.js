export default function HandleError(err,res){

    const message = err.message
    console.error(err)
    res.status(404).send({message}) 

}