const aboutSchema = require('../models/aboutModel')

exports.getAbout = async(req, res) =>{
    try{
        const about = await aboutSchema.find()
        res.json(about)
    }catch(error){
        res.status(500).json({message: 'Server Problem!!'})
    }
}
exports.addAbout =  async (req, res) =>{
    try{
        const {about} = req.body
        await aboutSchema.create({about})
        res.json({
            message:'Thank you for adding about .'
        })
    }catch(error) {
        res.status(500).json({message: 'Server Problem!!'})
    }

}
exports.getAboutId = async (req, res) =>{
    try{  
        const about = await aboutSchema.findById(req.params.id)

        res.json(about)

    }catch(error) {
        res.status(500).json({message: 'Server Problem !!'})
    }
}
exports.updateAbout = async (req, res) =>{
    try{
        const {about} = req.body
        
        await aboutSchema.findByIdAndUpdate(req.params.id, {about})

        res.json({
            message: 'About Updated.'
        })

    }catch(error){
        res.status(500).json({message: 'Server Problem'})
    }
}
exports.delAbout = async (req, res) =>{
    try{  
        const about = await aboutSchema.findByIdAndDelete(req.params.id)

        res.json({
            message: 'About deleted.'
        })

    }catch(error) {
        res.status(500).json({message: 'Server Problem!!'})
    }
}