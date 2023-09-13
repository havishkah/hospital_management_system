const jwt = require('jsonwebtoken')
const Doctor = require('../../models/doctor')

const doctorAuth = async (req, res, next) => {
    const { authorization } = req.headers

    if (!authorization){
        return res.status(401).json({error: 'Authorization token required'})
    }

    const token = authorization.split(' ')[1]

    try {
        const { _id } = jwt.verify(token, process.env.JWT_TOKEN)

        req.doctor = await Doctor.findOne({_id}).select('_id')
        next()
    } catch (error) {
        console.log(error)
        res.status(401).json({error: 'Request is not authorized'})
    }


}

module.exports = doctorAuth;