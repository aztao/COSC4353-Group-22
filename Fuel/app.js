require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const { forEach } = require("lodash");
const encrypt = require("mongoose-encryption");

const app = express();
const portNo = 3000

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/fuelDB",{useNewUrlParser:true,useUnifiedTopology:true});

const userCredentialSchema=new mongoose.Schema({
    userId:{
        type:String,
        required:[true,"Please enter Username"],
        unique:true
    },
    password:{
        type:String,
        required:[true,"Please enter password"]
    }
});


userCredentialSchema.plugin(encrypt,{secret:process.env.SECRET1,encryptedFields:['password']});

const UserCred=mongoose.model('UserCredential',userCredentialSchema);

const clientInfoSchema=new mongoose.Schema({
    clientname:{
        type:String,
        unique:true
    },
    clientpass:{
        type:String,
    },
    address1:String,
    address2:String,
    state:String,
});

clientInfoSchema.plugin(encrypt,{secret:process.env.SECRET2,encryptedFields:['clientpass']});

const ClientInfo=mongoose.model('ClientInfo',clientInfoSchema);

const fuelQuoteSchema=new mongoose.Schema({
    gallons:Number,
    suggestedprice:Number,
    totalprice:Number
});

const FuelQuotes=mongoose.model('FuelQuote',fuelQuoteSchema);

app.get("/",function(req,res){
    res.render("home",{pageTitle:"Home"});
});

app.get("/userregistration",function(req,res){
    res.render("userregistration",{pageTitle:"User Registration"});
});

app.post("/userregistration",function(req,res){
   const user={
    ID:req.body.username,
    pass:req.body.password
   };
   ClientInfo.findOne({clientname:user.ID},function(err,foundUser){
    if(!err)
        {
            if(foundUser)
                {
                    if(foundUser.clientpass===user.pass)
                        {
                            const userCredentials=new UserCred({
                                userId:foundUser,
                                password:foundUser.clientpass
                            });
                            userCredentials.save(function(err){
                                if(!err)
                                console.log("Validation successful!!");
                            });
                            res.render("fuel",{pageTitle:"Fuel",DelAddress:foundUser.address1+" "+foundUser.address2});
                        }
                }
        }
   });
});

app.get("/profile",function(req,res){
    res.render("profile",{pageTitle:"Profile"});
});

app.post("/profile",function(req,res){
    const newUser=new ClientInfo({
        clientname:req.body.username,
        clientpass:req.body.password,
        address1:req.body.address1,
        address2:req.body.address2,
        state:req.body.state
    });
    newUser.save(function(err){
        if(!err)
            {
                console.log("Username is "+newUser.clientname);
                console.log("Password is "+newUser.clientpass);
                console.log("A1 is "+newUser.address1);
                console.log("A2 is "+newUser.address2);
                res.redirect("/userregistration");
            }
        else
            console.log(err);
    })
});

app.get("/fuel",function(req,res){
        res.render("fuel",{pageTitle:"Fuel",DelAddress:"No address"});
});

app.post("/fuel",function(req,res){
    const newFuelQuota=new FuelQuotes({
        gallons:req.body.Gallons,
        suggestedprice:req.body.suggestedprice,
        totalprice:req.body.total
    });
    newFuelQuota.save(function(err){
        console.log(newFuelQuota);
    });
});


app.listen(portNo, function() {
    console.log("Runnin on "+portNo);
  });
  