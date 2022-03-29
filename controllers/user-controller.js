'use strict';
const User = require("../models/User");


exports.getAllUsers = async (req,res,next) => {
    try {
        let users = await User.find({});
        res.send(users)
    } catch (e) {
        console.log(e)
    }
}

exports.getUserById = async (req,res, next) =>{
    try {
        const { id } = req.body;
        let users = await User.findOne({_id: id});
        res.send(users)
    } catch (e) {
        console.log(e)
    }
}

exports.createUser = async (req,res, next) =>{
    try {
        const { name} = req.body;
    //console.log(req.body)
    newUser = new User({
        name: name,
      })
      newUser.save();
      res.status(200).send(newUser);

    } catch (e) {
        res.status(500).send(e);
    }
}


exports.deleteUser = async (req,res, next) =>{
    try {
        let userDel = await User.findOneAndRemove({_id: req.body.id});
        if(userDel){
            res.status(200).send(userDel);
        }else{
            res.status(500).send({"error":"not found"});
        }
    } catch (e) {
        res.status(500).send(e);
    }
}


exports.updateById = async (req,res, next) =>{
    try {
        const { newname, id,} = req.body;
   
       const filter = { _id: id };
       const update = { name: newname };
       
       // `doc` is the document _before_ `update` was applied
       let doc = await User.findOneAndUpdate(filter, update);
       res.status(200).send({});
   
       } catch (e) {
           res.status(500).send(e);
       }
}










