const mongoose = require('mongoose')


const projectSchema = new mongoose.Schema({
    project_id:{
        type: String,
        required: true,
        unique: true
    },
    title:{
        type: String,
        trim: true
    },
    description:{
        type: String,
        required: true
    },
    images:{
        type: Object,
        required: true
    }
},
{
    timestamps: true,
    autoIndex:true,
    autoCreate:true,
})

module.exports = mongoose.model('project', projectSchema)