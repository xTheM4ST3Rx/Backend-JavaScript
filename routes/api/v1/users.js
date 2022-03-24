const express = require("express");
const router = express.Router();
const authHeader = require("../../../middlewares/auth");

const User = require("../../../models/User");


//Procura usuário pelo ID
router.get("/find", async (req,res) =>{
    try {
        const { id } = req.body;

        let users = await User.findOne({_id: id});
        res.send(users)
    } catch (e) {
        console.log(e)
    }
})


//Procura todos os users
router.get("/findall",async (req,res) =>{
    try {
        let users = await User.find({});
        res.send(users)
    } catch (e) {
        console.log(e)
    }
})


//Cria novo usuário
router.post("/create",(req,res) =>{
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
})




//Atualiza novo nome de usuário pelo ID
router.put("/update",async (req,res) =>{
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
})




//Deleta usuário pelo ID
router.delete("/delete", authHeader, async (req,res) =>{
    try {
        let userDel = await User.findOneAndRemove({_id: req.body.id});
    res.status(200).send(userDel);

    } catch (e) {
        res.status(500).send(e);
    }

})


module.exports = router