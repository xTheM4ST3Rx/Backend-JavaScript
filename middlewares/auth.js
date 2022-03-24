module.exports = (req, res , next) => {
    const authHeader = req.headers["access-token"];

    if(!authHeader){
        return res.status(401).send({error: "Sem Token de acesso"})
    }else if(authHeader == "meegu"){
        return next();
    }else{
        return res.status(401).send({error: "token invalido"})
    }

}