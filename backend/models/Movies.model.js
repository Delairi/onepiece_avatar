import { Schema, model } from "mongoose";

const schemeMovies = new Schema({
    mal_id: {
        type: Number,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    synopsis: {
        type: String,
        required: true
    },
    images: {
        type: Object,
        required: true
    },
})

export const ModelMovies = model('movies',schemeMovies)