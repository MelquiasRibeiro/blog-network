import mongoose from 'mongoose';

const {Schema} = mongoose;


const PostSchema = new  Schema({

    title:{
        type:String,
        required: true,
        unique: true
    },
    description:{
        type:String,
        required:true,
        unique:true
    },
    photo:{
        type:String,
    },
    userName:{
        type:String,
        required: true,
    }, 
    categories:{
        type:Array,
    }    
},
{
    timestamps:true
}
)

export default mongoose.model("Post", PostSchema)