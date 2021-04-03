const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const chai = require('chai');
const { assert } = require('chai');
const app = require('../app.js');
const expect = chai.expect;

const testSchema = new Schema({
  fullname: { type: String, required: true },
  address1: {type: String, required: true },
  address2: {type: String},
  city: {type: String, required: true },
  state: {type:String, required: true},
  zip: {type:Number, required: true},
  userId: {type:String, required:true},
  password: {type:String, required: true},
  reenter: {type:String, required: true}
});

const ClientInfo = mongoose.model('Name', testSchema);
describe('Database Tests', function() {
  before(function (done) {
    mongoose.connect('mongodb://localhost/testDatabase');
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error'));
    db.once('open', function() {
      console.log('We are connected to test database!');
      done();
    });
  });
  describe('Test Database', function() {
    it('New client saved to test database', function(done) {
      var testClient = ClientInfo({
        fullname: 'Fuel Customer',
        address1: 'ABC Street',
        address2: '123 Road',
        city: 'Houston',
        state: 'TX',
        zip: '12345',
        userId: 'fuel',
        password: '123',
        reenter: '123'
      });
 
      testClient.save(done);
    });
    it('Should retrieve data from test database', function(done) {
      ClientInfo.find({fullname: 'Fuel Customer',address1: 'ABC Street', zip: '12345'}, (err, fullname, address1,zip) => {
        if(err) {throw err;}
        if(fullname.length === 0) {throw new Error('No data!');
        if(address1.length === 0) {throw new Error('No address!');
        assert.lengthOf(zip).to.be.greaterthan(5);}}
        done();
      });
    });
  });

  after(function(done){
    mongoose.connection.db.dropDatabase(function(){
      mongoose.connection.close(done);
    });
  });
});

/*  describe('Test app.js', function() {
    it('App.get for home.ejs', function() {
        app.get("/",function(req,res){
            res.render("home",{pageTitle:"Home"});
        });
    })

    it('App.get for userregistration.ejs', function(){
        app.get("/userregistration",function(req,res){
            res.render("userregistration",{pageTitle:"User Registration"});
        });
    })

    it('App.post for userregistration.ejs', function(){
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
    })

    it('App.get for profile.ejs', function(){
        app.get("/profile",function(req,res){
            res.render("profile",{pageTitle:"Profile"});
        });
    })

    it('App.post for profile.ejs',function(){
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
    })

    it('App.get for fuel.ejs', function(){
        app.get("/fuel",function(req,res){
            res.render("fuel",{pageTitle:"Fuel",DelAddress:"No address"});
    });
    })

    it('App.post for fuel.ejs', function(){
        app.post("/fuel",function(req,res){
            const newFuelQuota=new FuelQuotes({
                gallons:req.body.Gallons,
                suggestedprice:req.body.suggestedprice,
                totalprice:req.body.total
            });
            newFuelQuota.save(function(err){
                console.log(newFuelQuota);
            });
    })
})
});*/