const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const emailSchema = new Schema({
    
    emailid:[{
        type:String,
        // minLength:5,
        // maxLength:30,
        // required:true  
    }],
    subject:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
});

module.exports = mongoose.model('email' , emailSchema)