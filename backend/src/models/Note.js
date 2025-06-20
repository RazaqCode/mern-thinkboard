import mongoose from "mongoose";

//1st step: You need to create a scheme
//2nd step: You would create a model based off of that schema

const noteSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required: true

    },

},
{ timestamps: true} // this is to denote cretedAt, updatedAt
);

const Note = mongoose.model("Note", noteSchema)
export default Note