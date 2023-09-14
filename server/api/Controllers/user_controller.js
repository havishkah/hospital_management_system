const Admin = require('../models/admin')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser');

const createToken = (_id) =>{
   return jwt.sign({_id}, process.env.JWTSECRETE, {expiresIn: '1d'})
}

//login user
const loginUser = async (req, res) =>{
    const {username, password} =req.body

    try {
        const admin = await Admin.login(username, password)

        const token = createToken(admin._id)
        //res.cookie("token", token);
        res.status(200).json({username, token})
    } catch (error) {
        res.status(400).send(error)
    }
};

const signupUser = async (req, res) =>{
    const { username,email, contact, password } = req.body

    try{
        const admin = await Admin.signup(username,email, contact, password, )

       // const token = createToken(admin._id)

        res.status(200).json({admin})
    }catch(error){
        res.status(400).json({error: error.message})
    }
    
};

const getUsers = async (req,res) =>{
    const admin = await Admin.find({});
    res.status(200).json(admin);
};



module.exports = {
    signup: signupUser,
    login: loginUser,
    viewUsers: getUsers
}