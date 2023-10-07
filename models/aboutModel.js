const mongoose = require('mongoose')


const aboutSchema = new mongoose.Schema({
    about:{
        type: String,
        required: true
    }
},
{
    timestamps: true,
    autoIndex:true,
    autoCreate:true,
})

module.exports = mongoose.model('about', aboutSchema)