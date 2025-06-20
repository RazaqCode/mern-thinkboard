import mongoose from "mongoose";

const connectDB = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("mongo DB connected syccessfully ");


    }catch (error){
        console.error("error connecting to mongo DB ",error);
        process.exit(1);

    }
};

export default connectDB;

