const mongoose = require('mongoose')


const educationSchema = new mongoose.Schema({
    education:{
        type: String,
        required: true
    }
},
{
    timestamps: true,
    autoIndex:true,
    autoCreate:true,
})

module.exports = mongoose.model('education', educationSchema)