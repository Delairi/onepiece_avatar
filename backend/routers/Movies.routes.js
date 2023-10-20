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

RouterMovies.get('/filter/:query', async (req,res) => {

    try{

        const filterMovies = await MoviesController().filterMovies(req,res)
        res.send(filterMovies)

    }catch(err){
        HandleError(err,res)
    }

})

RouterMovies.get('/last_view', async (req,res) => {

    try{

        const lastViewMovies = await MoviesController().lastViewMovies(req,res)
        res.send(lastViewMovies)

    }catch(err){
        HandleError(err,res)
    }

})

RouterMovies.post('/last_view', async (req,res) => {

    try{

        const postLastView = await MoviesController().postMovie(req,res)
        res.send(postLastView)

    }catch(err){
        HandleError(err,res)
    }

})

RouterMovies.post('/favorite', async (req,res) => {

    try{

        const postLastView = await MoviesController().postFavorite(req,res)
        res.send(postLastView)

    }catch(err){
        HandleError(err,res)
    }

})

export default RouterMovies