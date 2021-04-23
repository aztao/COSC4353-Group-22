const { expect } = require('chai');
const chai = require('chai');
const { JSDOM } = require('jsdom');
const profile = require('../views/profile.ejs')
chai.use(require('chai-dom'));
require('jsdom-global')();

describe('profile.ejs', () => {
  beforeEach((done) => {
   JSDOM.fromFile('../Fuel/views/profile.ejs')
   .then((dom) => {
     global.document = dom.window.document
   })
 .then(done, done);
 })

describe("Level 1 heading", () => {
 it("h1 element should say 'Create new User Profile'", () => {
  let element = document.querySelector('h1')
  expect(element).to.have.text("Create new User Profile")
 })
})

describe("Level 2 heading", () => {
    it("h2 element should say 'Personal Details'", () => {
     let element = document.querySelector('h2')
     expect(element).to.have.text("Personal Details")
    })
})

describe("Full Name Requirement", () => {
    it("Full Name should be required", () => {
     let element = document.getElementById('fullname')
     expect(element).to.have.attr("required")
    })
   })

describe("Address 1 Requirement", () => {
    it("Address 1 should be required", () => {
     let element = document.getElementById('address1')
     expect(element).to.have.attr("required")
    })
   })
   
describe("Address 2 should be a text input", () => {
  it("Address 2 should be a text input", () => {
   let element = document.getElementById('address2');
   expect(element).to.have.attr('type', 'text')
  })
 })

 describe("City Requirement", () => {
  it("City should be required", () => {
   let element = document.getElementById('city')
   expect(element).to.have.attr("required")
  })
 })

 describe("State Requirement", () => {
  it("State should be required", () => {
   let element = document.getElementById('state')
   expect(element).to.have.attr("required")
  })
 })

 describe("Zipcode Requirement", () => {
  it("Zipcode should be required", () => {
   let element = document.getElementById('zipcode')
   expect(element).to.have.attr("required")
  })
 })

 describe("Username Requirement", () => {
  it("Username should be required", () => {
   let element = document.getElementById('username')
   expect(element).to.have.attr("required")
  })
 })

 describe("Password Requirement", () => {
  it("Password should be required", () => {
   let element = document.getElementById('password')
   expect(element).to.have.attr("required")
  })
 })

 describe("Re-enter Password Requirement", () => {
  it("Re-enter Password should be required", () => {
   let element = document.getElementById('reenter')
   expect(element).to.have.attr("required")
  })
 })

 /*describe("check_pass function", function() {
  it("get_pass function should work if passwords match", function() {
    const dom = new JSDOM(`function check_pass()
    {
     if (profile.getElementById('password').value == profile.getElementById('reenter').value) {
         profile.getElementById('submit').disabled = false;
        }
     else {
         profile.getElementById('submit').disabled = true;
        }
    }`, { runScripts: "dangerously" });
    var result = dom.document.check_pass();
    expect(result).equals('true');
  })
 })*/

 describe("Links text check", () => {
  it("Save button class should be a submit input", () => {
   let element = document.querySelector('button.btn.btn-primary.btnbelow.btn-lg');
   expect(element).to.have.attr('type', 'submit')
  })
 })

})

//requirements: 
//test if the right values are being inputted into the field, 
//valid values, check if correct value like string or int
//check correct field lengths