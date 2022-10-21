import JWT from 'jsonwebtoken';

export const verifyToken = (req,res,next)=>{
    const authHeader = req.headers.token;
    if(authHeader){
        JWT.verify(token , process.env.JWT_SECRETKEY, (err,user)=>{
            if(err) return res.status(403).json("Token is not valid!");
            req.user = user;
            next(); 
        })
    }else{
        return res.status(401).json("You are not authenticated")
    }
}

