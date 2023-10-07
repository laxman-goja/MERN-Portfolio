const educationSchema = require('../models/educationModel')

exports.getEducation = async(req, res) =>{
    try{
        const education = await educationSchema.find()
        res.json(education)
    }catch(error){
        res.status(500).json({message: 'Server Problem!!'})
    }
}
exports.addEducation =  async (req, res) =>{
    try{
        const {education} = req.body
        await educationSchema.create({education})
        res.json({
            message:'Thank you for adding education.'
        })
    }catch(error) {
        res.status(500).json({message: 'Server Problem!!'})
    }

}
exports.getEducationId = async (req, res) =>{
    try{  
        const education = await educationSchema.findById(req.params.id)

        res.json(education)

    }catch(error) {
        res.status(500).json({message: 'Server Problem !!'})
    }
}
exports.updateEducation = async (req, res) =>{
    try{
        const {education} = req.body
        
        await educationSchema.findByIdAndUpdate(req.params.id, {education})

        res.json({
            message: 'Education Updated.'
        })

    }catch(error){
        res.status(500).json({message: 'Server Problem'})
    }
}
exports.delEducation = async (req, res) =>{
    try{  
        const education = await educationSchema.findByIdAndDelete(req.params.id)

        res.json({
            message: 'Education deleted.'
        })

    }catch(error) {
        res.status(500).json({message: 'Server Problem!!'})
    }
}