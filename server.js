const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const fileUpload = require('express-fileupload')
require('dotenv').config()



const app = express()
//middleware
app.use(express.json())
app.use(cors())
app.use(fileUpload({
    useTempFiles: true
}))

//Routes
app.use('/', require('./routes/educationRoute'))
app.use('/', require('./routes/aboutRoute'))
app.use('/', require('./routes/experienceRoute'))
app.use('/', require('./routes/projectRoute'))
app.use('/', require('./routes/uploadRoute'))
app.use('/user', require('./routes/userRoute'))
app.use('/contact', require('./routes/contactRoute'))



PORT = process.env.PORT 

const listener = app.listen(PORT,async()=>{
    console.log(`server is listening at port:${listener.address().address}${PORT}`)
    console.log('press ctrl C to stop')


    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log('Mongodb connected')
    }catch(err){
        console.error('Problem while connecting mongodb')
    }

})