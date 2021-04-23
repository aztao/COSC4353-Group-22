const { expect } = require('chai');
const chai = require('chai');
const { JSDOM } = require('jsdom');
const fuelhistory = require('../views/fuelhistory.ejs')
chai.use(require('chai-dom'));
require('jsdom-global')();

describe('fuelhistory.ejs', () => {
  beforeEach((done) => {
   JSDOM.fromFile('../Fuel/views/fuelhistory.ejs')
   .then((dom) => {
     global.document = dom.window.document
   })
 .then(done, done);
 })

describe("Level 1 heading", () => {
    it("h1 element should say 'Fuel History for <%=person%>'", () => {
     let element = document.querySelector('h1')
     expect(element).to.have.text("Fuel History for <%=person%>")
    })
   })

describe("Gallons Requested", () => {
    it("Gallons Requested should be readonly", () => {
     let element = document.getElementById('Gallons')
     expect(element).to.have.attr("readonly")
    })
   })

describe("Delivery Address", () => {
    it("Delivery Address should be readonly", () => {
     let element = document.getElementById('DelAdd')
     expect(element).to.have.attr("readonly")
    })
   })

describe("Delivery Date", () => {
    it("Delivery Date should be readonly", () => {
     let element = document.getElementById('DelDate')
     expect(element).to.have.attr("readonly")
    })
   }) 
   
describe("Suggested Price / Gallon", () => {
    it("Suggested Price / Gallon should be readonly", () => {
     let element = document.getElementById('Price')
     expect(element).to.have.attr("readonly")
    })
   })

describe("Total Amount Due", () => {
    it("Total Amount Due should be readonly", () => {
     let element = document.getElementById('Total')
     expect(element).to.have.attr("readonly")
    })
   })

})
