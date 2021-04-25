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

