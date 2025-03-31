import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()


// export a function to connect with mongodb
const db= ()=>{
    mongoose
        .connect(process.env.MONGO_URL)
        .then(()=>{
            console.log("Connectedd to mongodb")
        })
        .catch((err)=>{
        console.log("Error connecting to mongdb ") 
        })
}

export default db