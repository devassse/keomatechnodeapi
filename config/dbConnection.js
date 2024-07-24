const mongoose = require("mongoose")

const connectDb = async () => {
    try{
        const connect = await mongoose.connect(process.env.CONNECTION_URL)
        console.log("Database Connection", connect.connection.host, connect.connection.name);
    }catch(error){
        console.log("Error Connection", error);
        process.exit(1)
    }
}

module.exports = connectDb