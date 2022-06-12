const mongoose = require('mongoose');
const postSchema = new mongoose.Schema({
    StaffMemberName:{
        type:String,
        required:true
    },
    memberID:{
        type:String,
        required:true
    },
    Age:{
        type:Number,
        required:true
    },
    Address:{
        type:String,
        required:true
    },
    PhoneNumber:{
        type:Number,
        required:true
    },
    Gender:{
        type:String,
        required:true
    },
    DateOfBirth:{
        type:String,
        required:true
    }
});

module.exports =  mongoose.model('Posts', postSchema);

     