import { Router } from "express";
import HandleError from "../utils/HandleError.js";
import CharactersController from "../controllers/Character.controller.js";


const RouterCharacters = Router()


RouterCharacters.get('/movie/:mal_id', async (req,res) => {

    try{

        const getCharactersFromMovie = await CharactersController().getCharactersFromMovie(req,res)
        res.send(getCharactersFromMovie)

    
    }catch(err){
        HandleError(err,res)
    }

})

RouterCharacters.get('/:mal_id', async (req,res) => {

    try{

        const getCharacter = await CharactersController().getCharacter(req,res)
        res.send(getCharacter)

    
    }catch(err){
        HandleError(err,res)
    }

})

export default RouterCharacters