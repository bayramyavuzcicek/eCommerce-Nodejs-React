import JWT from 'jsonwebtoken';

export const verifyToken = (req,res,next)=>{
    const authHeader = req.headers.token;
    if(authHeader){
        JWT.verify(authHeader , process.env.JWT_SECRETKEY, (err,user)=>{
            if(err) return res.status(403).json("Token is not valid!");
            req.user = user;
            next(); 
        })
    }else{
        return res.status(401).json("You are not authenticated")
    }
}

export const verifyTokenAndAuthorization = (req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user.id === req.params.id || req.user.isAdmin){
            next()
        }else{
            res.status(500).json("You are not allowed to do that!")
        }
    })
}

export const verifyTokenAndAdmin = (req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user.isAdmin){
            next()
        }else{
            res.status(500).json("You are not allowed to do that!")
        }
    })
}
