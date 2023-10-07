const experienceSchema = require('../models/experienceModel')

exports.getExperience = async(req, res) =>{
    try{
        const experience = await experienceSchema.find()
        res.json(experience)
    }catch(error){
        res.status(500).json({message: 'Server Problem!!'})
    }
}
exports.addExperience =  async (req, res) =>{
    try{
        const {experience} = req.body
        await experienceSchema.create({experience})
        res.json({
            message:'Thank you for adding experience.'
        })
    }catch(error) {
        res.status(500).json({message: 'Server Problem!!'})
    }

}
exports.getExperienceId = async (req, res) =>{
    try{  
        const experience = await experienceSchema.findById(req.params.id)

        res.json(experience)

    }catch(error) {
        res.status(500).json({message: 'Server Problem !!'})
    }
}
exports.updateExperience = async (req, res) =>{
    try{
        const {experience} = req.body
        
        await experienceSchema.findByIdAndUpdate(req.params.id, {experience})

        res.json({
            message: 'Experience Updated.'
        })

    }catch(error){
        res.status(500).json({message: 'Server Problem'})
    }
}
exports.delExperience = async (req, res) =>{
    try{  
        const experience = await experienceSchema.findByIdAndDelete(req.params.id)

        res.json({
            message: 'Experience deleted.'
        })

    }catch(error) {
        res.status(500).json({message: 'Server Problem!!'})
    }
}