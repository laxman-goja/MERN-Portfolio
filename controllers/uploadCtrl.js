const cloudinary = require('cloudinary')
const fs = require('fs')

//--------Uploading images to cloudinary --------------

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key:process.env.CLOUD_API_KEY,
    api_secret:process.env.CLOUD_API_SECRET
})

const uploadImage = async(req, res, next) => {
    try{    
        if(!req.files || Object.keys(req.files).length === 0){
            return res.status(400).json({message: 'No files uploaded'})
        }

        const file = req.files.file
        if(file.size > 1024*1024){
            removeTmp(file.tempFilePath)
            return res.status(400).json({message: 'Size if too large'})
        }

        if (file.mimetype !== 'image/jpeg' && file.mimetype !== 'image/png'){
            removeTmp(file.tempFilePath)
            return res.status(400).json({message: 'Incorrect file type'})
        }

        cloudinary.v2.uploader.upload(file.tempFilePath, {folder: "images"}, async (err, result) => {
            if (err) throw err

            removeTmp(file.tempFilePath)
            res.json({public_id: result.public_id, url:result.secure_url})
        })

    }catch(error){
        res.status(500).json({message: error.message})
    }
}

const removeTmp = (path) => {
    fs.unlink(path, err => {
        if (err) throw err
    })
}

const deleteImage = (req, res) => {
    try{
        const {public_id} = req.body

        if(!public_id){
            return res.status(400).json({message: 'No image selected'})
        }

        cloudinary.v2.uploader.destroy(public_id, async (err, result) => {
            if (err) throw err

            res.json({message:'Image deleted successfully'})
        })
    }catch(error){
        res.status(500).json({message: error.message})
    }
}
module.exports = {uploadImage, deleteImage}