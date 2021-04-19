require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const cookieParser = require('cookie-parser')
const session=require("express-session");
const passport=require("passport");
const passportLocalMongoose=require("passport-local-mongoose");
const bcrypt=require("bcrypt");
const moment=require("moment");
const saltRounds=10;

const app = express();
const portNo = 3000

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.use(cookieParser());
app.use(session({
    secret:process.env.SECRET1,
    resave:false,
    saveUninitialized:false
  }));
  
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect("mongodb://localhost:27017/fuelDB",{useNewUrlParser:true,useUnifiedTopology:true});
mongoose.set("useCreateIndex",true);;

const userCredentialSchema=new mongoose.Schema({
    userId:{
        type:String,
        required:true,
        unique:true
    },
    pass:{
        type:String,
        required:true
    }
});


const UserCred=mongoose.model('UserCredential',userCredentialSchema);


const clientInfoSchema=new mongoose.Schema({
    clientFullname:String,
    address1:String,
    address2:String,
    city:String,
    state:String,
    zipcode:String,
    username:{
        type:String,
        unique:true
    },
    password:{
        type:String,
    },
    
});

clientInfoSchema.plugin(passportLocalMongoose);

const ClientInfo=mongoose.model('ClientInfo',clientInfoSchema);

passport.use(ClientInfo.createStrategy())
passport.serializeUser(ClientInfo.serializeUser());
passport.deserializeUser(ClientInfo.deserializeUser());

const fuelQuoteSchema=new mongoose.Schema({
    fuelrequestor:String,
    qno:Number,
    gallons:{
        type:Number,
        required:[true,"gallons cannot be empty"]
    },
    deliveryAddress:String,
    deliveryDate:Date,
    suggestedprice:{
        type:Number,
        required:[true,"suggested price cannot be empty"]
    },
    totalprice:Number
});

const FuelQuotes=mongoose.model('FuelQuote',fuelQuoteSchema);

app.get("/",function(req,res){
    res.render("home",{pageTitle:"Home"});
});

app.get("/userlogin",function(req,res){
    res.render("userlogin",{pageTitle:"Login"});
});

app.post("/userlogin",function(req,res){
   const user=new ClientInfo({
    username:req.body.username,
    password:req.body.password
   });
   req.login(user,function(err){
    passport.authenticate("local")(req,res,function(){
        // console.log("Validation successful!!"+req.user.id);
        bcrypt.hash(req.body.password,saltRounds,function(herr,hash){
            const newUser=new UserCred({
                userId:req.user.username,
                pass:hash
            });
            newUser.save();
            res.redirect("/fuel");
        });   
    });
  });
});

app.get("/profile",function(req,res){
    res.render("profile",{pageTitle:"Profile"});
});

app.post("/profile",function(req,res){
    ClientInfo.register({
        username:req.body.username,
        clientFullname:req.body.fullname,
        address1:req.body.address1,
        address2:req.body.address2,
        city:req.body.city,
        state:req.body.state,
        zipcode:req.body.zipcode,
    },req.body.password,function(err,user){
        if(err)
            {
                console.log(err);
                res.redirect("/profile");
            }
        else
            {
                passport.authenticate("local")(req,res,function(){
                    res.redirect("/userlogin");
                  });
            }
    });
});

app.get("/fuel",function(req,res){
    if(req.isAuthenticated())
        {   
            FuelQuotes.findOne({fuelrequestor:req.user.clientFullname},function(err,foundPrevRecord){
                if(!err)
                    {
                        if(foundPrevRecord)
                            {
                                if(foundPrevRecord.qno>=1)
                                    res.render("fuel",{pageTitle:"Fuel",DelAddress:req.user.address1+" "+req.user.address2,USState:req.user.state,prevReq:foundPrevRecord.qno});
                            }
                        else
                            res.render("fuel",{pageTitle:"Fuel",DelAddress:req.user.address1+" "+req.user.address2,USState:req.user.state,prevReq:0});
                    }
            });
        }
    else
        res.render("fuel",{pageTitle:"Fuel",DelAddress:"No address",USState:"None",prevReq:0});
});

app.post("/fuel",function(req,res){
    if(req.isAuthenticated())
        {
            FuelQuotes.countDocuments({fuelrequestor:req.user.clientFullname},function(err,Qno){
                if(!err)
                    {
                        var newFuelQuota;
                        if(Qno)
                            {
                                newFuelQuota=new FuelQuotes({
                                    fuelrequestor:req.user.clientFullname,
                                    gallons:req.body.Gallons,
                                    deliveryAddress:req.user.address1+" "+req.user.address2,
                                    deliveryDate:req.body.DelDate,
                                    suggestedprice:req.body.suggestedprice,
                                    totalprice:req.body.total,
                                    qno:Qno+1
                                });
                            }
                        else
                            {
                                newFuelQuota=new FuelQuotes({
                                    fuelrequestor:req.user.clientFullname,
                                    gallons:req.body.Gallons,
                                    deliveryAddress:req.user.address1+" "+req.user.address2,
                                    deliveryDate:req.body.DelDate,
                                    suggestedprice:req.body.suggestedprice,
                                    totalprice:req.body.total,
                                    qno:1
                                });
                            }
                            newFuelQuota.save(function(err){
                                    res.redirect("/");
                                });
                    }
            });
        }   
    else
        res.redirect("/error");
});


app.get("/fuelhistory/:fueluser/:quotation",function(req,res){
    if(req.isAuthenticated())
        {
            const fueluser=req.params.fueluser;
            const qNumber=req.params.quotation;
            FuelQuotes.countDocuments({fuelrequestor:fueluser},function(err,countDocs){
                if(!err)
                    if(countDocs)
                        {
                            FuelQuotes.find({fuelrequestor:fueluser},function(error,foundFuelRecord){
                                if(!error)
                                    if(foundFuelRecord)
                                        {
                                            foundFuelRecord.forEach(function(recs){
                                                if(qNumber==recs.qno)
                                                    {
                                                        res.render("fuelhistory",{
                                                            pageTitle:"Fuel Quote History",
                                                            person:recs.fuelrequestor,
                                                            userGallons:recs.gallons,
                                                            userDelAdd:req.user.address1+" "+req.user.address2,
                                                            userDelDate:moment(recs.deliveryDate).format("DD/MM/YYYY"), 
                                                            usersuggestedprice:recs.suggestedprice,
                                                            userTotalPrice:recs.totalprice,
                                                        });
                                                    }
                                            });
                                        }
                            });
                        }
            });
        }
    else
        res.redirect("error");

});

app.post("/fuelhistorymain",function(req,res){
    if(req.isAuthenticated())
        {
            const fullname=req.body.search;
            FuelQuotes.countDocuments({fuelrequestor:fullname},function(err,Qno){
                if(!err)
                    {
                        if(Qno)
                        {
                            res.render("fuelhistorymain",{
                                pageTitle:"Fuel Quote History",
                                person:fullname,
                                requestedHistory:Qno      
                                });
                        }
                    else
                        {
                            res.render("fuelhistorymain",{
                                pageTitle:"Fuel Quote History",
                                person:fullname,
                                requestedHistory:0      
                                });    
                        }
                    }
            });
        }
    else
        res.redirect("error");
            
});

app.get("/error",function(req,res){
    res.render("error");
});

app.get("/logout",function(req,res){
    req.logout();
    res.redirect("/userlogin");
  });

app.listen(portNo, function() {
    console.log("Runnin on "+portNo);
  });