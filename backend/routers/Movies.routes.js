import { Router } from "express";
import HandleError from "../utils/HandleError.js";
import MoviesController from "../controllers/Movies.controller.js";


const RouterMovies = Router()


RouterMovies.get('/', async (req,res) => {

    try{

        const getMovies = await MoviesController().getMovies(req,res)
        res.send(getMovies)

    }catch(err){
        HandleError(err,res)
    }

})

export default RouterMovies