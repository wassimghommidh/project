const bcrypt= require('bcrypt')
var db= require('../database-mysql/index')
const register=async(req,res)=>{
var salt=await bcrypt.genSalt()
var pass=await bcrypt.hash(req.body.password,salt)
var inssql='INSERT INTO users SET ? '
var params={
    firstname:req.body.firstname,
    lastname:req.body.lastname,
    email:req.body.email,
    phonenumber:req.body.phonenumber,
    password:pass
};
db.query(inssql,params,(err,result)=>{
    if(err) console.log(err);
    console.log(result)
})
}
var login=(req,res)=>{
    var password=req.body.password
    var username=req.body.email
    var getsql='SELECT * FROM users WHERE email =?'
    db.query(getsql,username,(err,result)=>{
          if(err){ console.log(err);}
          result.filter(async(elem)=>{
              bcrypt.compare(password,elem.password)
              .then((result)=>{
                  if(result===true){ 
                   res.json({redirct:"/"})
                  }
                })
              .catch((err)=>{console.log(err);})
            })
    })  
}
module.exports ={register,login} 