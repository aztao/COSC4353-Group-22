const { expect } = require('chai');
const chai = require('chai');
const { JSDOM } = require('jsdom');
const userregistration = require('../views/userregistration.ejs')
chai.use(require('chai-dom'));
require('jsdom-global')();

describe('userregistration.ejs', () => {
  beforeEach((done) => {
   JSDOM.fromFile('../Fuel New/views/userregistration.ejs')
   .then((dom) => {
     global.document = dom.window.document
   })
 .then(done, done);
 })

describe("Level 1 heading", () => {
 it("h1 element should say 'Register New User'", () => {
  let element = document.querySelector('h1')
  expect(element).to.have.text("Register New User")
 })
})

describe("Level 2 heading", () => {
  it("h2 element should say 'USER LOGIN'", () => {
   let element = document.querySelector('h2')
   expect(element).to.have.text("USER LOGIN")
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

describe("Links text check", () => {
 it("Register button class should be a submit input", () => {
  let element = document.querySelector('input.btn.btn-primary');
  expect(element).to.have.attr('type', 'submit')
 })
})


})

//requirements: 
//test if the right values are being inputted into the field, 
//valid values, check if correct value like string or int
//check correct field lengths