const nodemailer = require('nodemailer');

exports.getContact = (req, res) =>{
    res.json({message: 'Contacted'})
}

exports.addContact = (req, res) =>{
    
    // smtp protocol is user for transporting messages every email providers support this protocol

    let smtpTransport = nodemailer.createTransport({
        service: 'Gmail',

        port: 587,

        auth:{
            user: process.env.SMTP_USER ,
            pass: process.env.SMTP_PASSWORD
        }
    })

    let mailOptions = {
        from : data.email,
        to:  'luckyshrestha78@gmail.com',
        subject : `Message from ${data.name}`,
        html:`
            <h3>Information</h3>
            <ul>
            <li>Name: ${data.name}</li>
            <li>Name: ${data.email}</li>
            </ul>
            
            <h3>Message</h3>
            <p>${data.message}</p>
        `
        }
    
    smtpTransport.sendMail(mailOptions, (err, res) =>{
        try{   
            if (err) {
                return res.status(400).json({message:err.message}) 
            }else{
                return res.status(400).json({message:'Message was sent'}); 
            }   

        }catch(err){
            res.status(500).json({message:err.message}) 

        }
        
    })
}