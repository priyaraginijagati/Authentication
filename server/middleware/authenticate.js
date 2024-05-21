const jwt = require("jsonwebtoken");
const userdb = require("../models/userSchema");
const keySecret = "jagatipriyaraginipreethiraginini"

const authenticate = async (req, res, next) => {
    try {
        const token = req.headers.authorization;
        //console.log(token);
        const verifytoken = jwt.verify(token, keySecret);
        const rootUser = await userdb.findOne({ _id: verifytoken._id });
        if (!rootUser) { throw new Error("user not found") }
        req.token = token
        req.rootUser = rootUser
        req.userId = rootUser._id
        //console.log(rootUser);
        next();
    } catch (error) {
        res.status(401).json({status:401,message:"unauthorized no token provided"})

    }


}
module.exports = authenticate