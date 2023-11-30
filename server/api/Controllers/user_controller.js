const Admin = require('../models/admin')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser');

const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.JWTSECRETE, { expiresIn: '3d' })
}

//login user
const loginUser = async (req, res) => {
    const { username, password } = req.body

    try {
        const admin = await Admin.login(username, password)
        const role = admin.role
        const id = admin.id
        const token = createToken(admin._id)
        
        res.status(200).json({ username, token, role, id });
        console.log(`${role} User Logged in`);
    } catch (error) {
        console.log(error);
        res.status(400).send({error:error.message})
    }
};

const signupUser = async (req, res) => {

    const { username, email, contact, password, role, id } = req.body
    console.log(username);
    try {
        const admin = await Admin.signup(username, email, contact, password, role, id)
        // const token = createToken(admin._id)

        res.status(200).json({ admin })
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message })
    }

};

const getUsers = async (req, res) => {
    const admin = await Admin.find({});
    res.status(200).json(admin);
};



module.exports = {
    signup: signupUser,
    login: loginUser,
    viewUsers: getUsers
}