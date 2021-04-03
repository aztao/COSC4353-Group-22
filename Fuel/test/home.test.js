const { expect } = require('chai');
const chai = require('chai');
const { JSDOM } = require('jsdom');
const home = require('../views/home.ejs');
chai.use(require('chai-dom'));
require('jsdom-global')();

describe('home.ejs', () => {
  beforeEach((done) => {
   JSDOM.fromFile('../Fuel New/views/home.ejs')
   .then((dom) => {
     global.document = dom.window.document
   })
 .then(done, done);
 })

describe("Level 1 heading", () => {
 it("h1 element should say 'Welcome to Fuel Rate Calculator!!'", () => {
  let element = document.querySelector('h1')
  expect(element).to.have.text(" Welcome to Fuel Rate Calculator!!")
 })
})


describe("Link check", () => {
 it("First link should be 'Login in to Existing User Profile'", () => {
  let element = document.querySelector('.info h2:first-child a')
  expect(element).to.have.text("Login in to Existing User Profile")
 })
})

describe("Link check", () => {
 it("Second link should be 'Create a New User Profile'", () => {
  let element = document.querySelector('.info h2 a:nth-child(2) ')
  expect(element).to.have.text("Create a New User Profile")
 })
})


})

//requirements: 
//test if the right values are being inputted into the field, 
//valid values, check if correct value like string or int
//check correct field lengths