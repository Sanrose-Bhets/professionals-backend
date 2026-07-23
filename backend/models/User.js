const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    email:{
        type:String,
        require:true
    },
    passowrd:{
        type:String,
        require:true
    }
    // profession:{
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref: 'Professional'
    // }
})


const User=mongoose.model("User", userSchema);

module.exports=User;