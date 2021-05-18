const nodemailer = require('nodemailer');
const express = require("express");
const router = express.Router();

const emailSchema = require('../model/email');
const sendMail = async (req, res, next) => {

    console.log("Email", req.body.emailid[0]);
    console.log("subject", req.body.subject);
    console.log("content", req.body.content);
    const {
        emailid,
        subject,
        content
    }  = req.body;
    try {
        await emailSchema.insertMany([{
            emailid,
            subject,
            content
        } ]);
        
        for (let i = 0; req.body.emailid[i]!=null ; i++) {
            console.log(i, req.body.emailid[i]);
            var transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 587,
                secure: false,
                requireTLS: true,
                service: 'gmail',
                auth: {
                    user: 'varunkumar.1991@gmail.com', //email ID
                    pass: 'mmnurav12345' //Password 
                }
            });
    
            var mailOptions = {
                from: 'varunkumar.1991@gmail.com',
                to: req.body.emailid[i],
                subject: req.body.subject,
                html: req.body.content,
            };
    
            await transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                } else {
                    console.log(info, "mail sent")
                }
            });
            res.json({
                error: false,
                message: "Mail sent successfully"
            });
        }
        
    } catch (err) {
        next(err.message)
    }
res.send('ok')
}

module.exports = {
    sendMail
}