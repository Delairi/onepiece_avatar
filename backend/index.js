import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import RouterMovies from './routers/Movies.routes.js'
import InitMongo from './Mongo.js'
import RouterCharacters from './routers/Characters.routes.js'
import { client, schemaLastViewRedis } from './Redis.js'
import cookieParser from 'cookie-parser'

dotenv.config()
const main = async () => {

    const app = express()
    const PORT = process.env.PORT || 8008
    app.use((cors({
        origin: 'http://localhost:5173',
        credentials: true
    })))

    app.use(express.json())
    app.use(express.urlencoded({extended: true}))
    app.use(cookieParser())
    // INIT MONGO
    InitMongo()

    // INIT REDIS
    client.connect().then(() => {
        console.log('Redis is connected')
    }).catch(err => {
        console.error(err)
    })

    // SCHEMAS REDIS

    schemaLastViewRedis().then(() => {
        console.log('Schema LastView is created')
    }).catch(err => {
        console.error(err)
    })

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