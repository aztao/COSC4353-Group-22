const { expect } = require('chai');
const chai = require('chai');
const { JSDOM } = require('jsdom');
const userlogin = require('../views/userlogin.ejs')
chai.use(require('chai-dom'));
require('jsdom-global')();

describe('userlogin.ejs', () => {
  beforeEach((done) => {
   JSDOM.fromFile('../Fuel/views/userlogin.ejs')
   .then((dom) => {
     global.document = dom.window.document
   })
 .then(done, done);
 })

describe("Level 1 heading", () => {
 it("h1 element should say 'Login'", () => {
  let element = document.querySelector('h1')
  expect(element).to.have.text("Login")
 })
})

describe("Level 2 heading", () => {
  it("h2 element should say 'Login'", () => {
   let element = document.querySelector('h2')
   expect(element).to.have.text("Login")
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
  let element = document.querySelector('button.btn.btn-primary.btn-lg');
  expect(element).to.have.attr('type', 'submit')
 })
})


})

//requirements: 
//test if the right values are being inputted into the field, 
//valid values, check if correct value like string or int
//check correct field lengths