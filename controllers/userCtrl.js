const userSchema = require('../models/userModel')
const jwt = require ('jsonwebtoken')
const bcrypt = require ('bcrypt')


exports.registerUser = async (req, res) =>{
    try{
        const {username, email, password} = req.body

        const user = await userSchema.findOne({email:email})

        if (user) {
            return res.status(400).json({message: 'User already registered'})
        }
        const hash = bcrypt.hashSync(password,bcrypt.genSaltSync(10))

        const newUser = await userSchema.create({username, email, password:hash})

        res.json({
            message: 'Registered successfully.'
        })
    }catch(error){
        res.status(500).json({message: 'Problem while registering'})
    }
}

exports.loginUser = async (req, res) =>{
    try{
        const {email, password} = req.body

        const user = await userSchema.findOne({email: email})

        if (!user){
            return res.status(400).json({message: 'User not found.'})
        }

        const isMatch = await bcrypt.compareSync(password, user.password)

        if(!isMatch){
            return res.status(400).json({message: 'Incorrect password.'})
        }

        const payload ={
            id: user._id,
            username: user.username
        }

        const token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn:"60d"})
        res.json({token, user})
    }catch(error){
        res.status(500).json({message: 'Problem while registering'})
    }

}

exports.verifyToken = async (req, res) =>{
    try{
        const token = req.header('Authorization')

        if (!token) {
            return res.send(false)
        }

        jwt.verify(token, process.env.JWT_SECRET, async (err, verified) => {
            if (err){
                return res.send(false)
            }

            const user = await userSchema.findById(verified.id)
            
            if(!user){
                return res.send(false)
            }else{
                return res.send(true)
            }
            
        })

    }catch(error){
        return res.status(500).json({message: error.message})
    }
}