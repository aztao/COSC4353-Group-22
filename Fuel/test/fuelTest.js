const { expect } = require('chai');
const chai = require('chai');
const { JSDOM } = require('jsdom');
chai.use(require('chai-dom'));
require('jsdom-global')();

describe('fuel.ejs', () => {
  beforeEach((done) => {
   JSDOM.fromFile('../Fuel/views/fuel.ejs')
   .then((dom) => {
     global.document = dom.window.document
   })
 .then(done, done);
 })

describe("Level 1 heading", () => {
 it("h1 element should say 'Fuel Quote Form'", () => {
  let element = document.querySelector('h1')
  expect(element).to.have.text("Fuel Quote Form")
 })
})

describe("Gallons Requested Requirement", () => {
  it("Gallons requested should be required", () => {
    let element = document.getElementById('Gallons')
    expect(element).to.have.attr("required")
  })
})

describe("Delivery Address Read Only", () => {
  it("Delivery address should be readonly", () => {
    let element = document.getElementById('DelAdd')
    expect(element).to.have.attr("readonly")
  })
})

describe("Delivery Date is a date type", () => {
  it("Delivery Date should be a date type", () => {
   let element = document.getElementById('DelDate');
   expect(element).to.have.attr('type', 'date')
  })
 })

describe("Suggested Price / Gallon Read Only", () => {
  it("Suggested price / gallon should be readonly", () => {
    let element = document.getElementById('Price')
    expect(element).to.have.attr("readonly")
  })
})

describe("Total Amount Due Read Only", () => {
  it("Total amount due should be readonly", () => {
    let element = document.getElementById('Total')
    expect(element).to.have.attr("readonly")
  })
})

describe("Links text check", () => {
  it("Get Quote class should be a button", () => {
   let element = document.querySelector('button.btn.btn-secondary');
   expect(element).to.have.attr('type', 'button')
  })
 })

describe("Links text check", () => {
  it("Submit Quote button class should be a submit", () => {
   let element = document.querySelector('button.btn.btn-primary');
   expect(element).to.have.attr('type', 'submit')
  })
 })

})

//requirements: 
//test if the right values are being inputted into the field, 
//valid values, check if correct value like string or int
//check correct field lengths