const express = require("express");

const app = express();

function registerValidation(req,res,next){
    const {first_name,last_name,email,pincode,age,gender,password} = req.body;
    if(first_name==="" || !first_name){
        res.send("First name require");
    }
    if(last_name==="" || !last_name){
         res.send("Last name require");
    }
    if(!password || password.length<6){
        res.send("Password length should be at least 6")
    }
    if(email==="" || !email){
         res.send("email require");
    }
    if(!email.includes("@") || !email.includes(".")){
         res.send("Enter valid email")
    }
    if(!pincode){
         res.send("Pincode require");
    }
    if(pincode.length!==6){
         res.send("Enter valid pincode")
    }
    if(!age){
         res.send("Age require");
    }
    if(age<1 || age>100){
         res.send("Age should be in between 1 to 100")
    }
    if(!gender){
         res.send("Gender require");
    }
    if(gender !=="male" && gender!=="female" && gender!=="other"){
         res.send("Gender require")
    }
    next()
}

let users = [];
function userRegister(req,res){
    users.push(req.body);
    res.send("Register successfully")
    
}
function getusers(req,res){
    res.send(users);
    
}

app.use(express.json());


app.post("/",registerValidation,userRegister)
app.get("/",getusers)

app.listen(3000);
