const projectSchema = require('../models/projectModel')

exports.getProject = async(req, res) =>{
    try{
        const project = await projectSchema.find()
        res.json(project)
    }catch(error){
        res.status(500).json({message: error.message})
    }
}
exports.addProject =  async (req, res) =>{
    try{
        const {project_id, title, description, images} = req.body
        await projectSchema.create({project_id, title, description, images})
        res.json({
            message:'Thank you for adding project.'
        })
    }catch(error) {
        res.status(500).json({message: error.message})
    }

}
exports.getProjectId = async (req, res) =>{
    try{  
        const project = await projectSchema.findById(req.params.id)

        res.json(project)

    }catch(error) {
        res.status(500).json({message: error.message})
    }
}
exports.updateProject = async (req, res) =>{
    try{
        const {project_id, title, description, images} = req.body
        
        await projectSchema.findByIdAndUpdate(req.params.id, {project_id, title, description, images})

        res.json({
            message: 'Project Updated.'
        })

    }catch(error){
        res.status(500).json({message: error.message})
    }
}
exports.delProject = async (req, res) =>{
    try{  
        const project = await projectSchema.findByIdAndDelete(req.params.id)

        res.json({
            message: 'Project deleted.'
        })

    }catch(error) {
        res.status(500).json({message: error.message})
    }
}