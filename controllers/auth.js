const { response } = require("express");
const { validarGoogleIdToken } = require("../helpers/google-verify-token");


const googleAuth = async (req,res = response)=>{

    //TODO obtener token
    const token = req.body.token;
    if(!token){
        return res.json({
            ok:false,
            msg: "no token in the petition"
        });
    }

    const googleUser = await validarGoogleIdToken(token);
    if(!googleUser){
        return res.status(400).json({
            ok:false,
        });
    }

    //TODO: Guardar en DB

    res.json({
        ok:true,
        googleUser
    })
}


module.exports = {
    googleAuth
};
