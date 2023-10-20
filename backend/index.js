import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import RouterMovies from './routers/Movies.routes.js'
import InitMongo from './Mongo.js'
import RouterCharacters from './routers/Characters.routes.js'

dotenv.config()
const main = async () => {

    const app = express()
    const PORT = process.env.PORT || 8008
    app.use((cors({
        origin: 'http://localhost:5173',
    })))

    app.use(express.json())
    app.use(express.urlencoded({extended: true}))
    InitMongo()
    /**
     * Routes
     */
    
    app.use('/api/v1/movies',RouterMovies)
    app.use('/api/v1/characters',RouterCharacters)

    app.listen(PORT , () => {
        console.log(`Server is running on port ${PORT}`)
    })

}


main().catch(err => {
    console.error(err)
})