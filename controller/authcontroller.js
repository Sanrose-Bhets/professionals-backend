const bcrypt = require("bcryptjs");
const User = require("../models/User.js");


const register = async (req,res) => {
    const{email, password} = req.body;

    if (!email||!password){
    return res.status(400).json({"error": "Credentials missing"})
    }
    const exisitingUser=await User.findOne({email});
    if (exisitingUser){
        return res.status(400).json({"error":"User already Exists"})
    }

    const hashedpassword = await bcrypt.hash(password,10)

    const newUser = {
        email:email,
        password: hashedpassword
    }
    const user = await User.create(newUser)

    res.status(200).json({
        message: "Registeration Successfull",
        id: user._id,
        email: user.email
    })

}

module.exports = { register }
