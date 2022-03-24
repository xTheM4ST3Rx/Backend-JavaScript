const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    birthdate:{
        type: Date,
    },
    document:{
        type: String,
    },
    acceptedTerms:{
        type: Boolean,
        default: false
    },
    zipcode:{
         type: Number
    },
    street:{
        type: String
    } ,
    neighborhood:{
        type: String
    },
    city :{
        type: String
    },
    state:{
        type: String
    } ,
    createdAt:{
        type: Date,
        default: Date.now,
    },
    updatedAt:{
        type: Date
    },
    
})


const User = mongoose.model('users', UserSchema);
module.exports =  User;