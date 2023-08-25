const Admin = require('../models/admin')

//login user
const loginUser = async (req, res) =>{
    res.json({mssg : 'user signup'});
};

const signupUser = async (req, res) =>{
    const { username,email,contact, password } = req.body

    try{
        const admin = await Admin.signup(username,email,contact, password)

        res.status(200).json({username, admin})
    }catch(error){
        res.status(400).json({error: error.message})
    }
    
};

module.exports = {
    signup: signupUser,
    login: loginUser
}