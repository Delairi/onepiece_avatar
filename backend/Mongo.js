import mongoose from "mongoose"

const InitMongo = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log('MongoDB is connected')
    }catch(err){
        console.error(err)
    }
}

export default InitMongo