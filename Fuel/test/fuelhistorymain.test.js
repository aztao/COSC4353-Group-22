const { expect } = require('chai');
const chai = require('chai');
const { JSDOM } = require('jsdom');
const fuelhistorymain = require('../views/fuelhistorymain.ejs')
chai.use(require('chai-dom'));
require('jsdom-global')();

describe('fuelhistorymain.ejs', () => {
  beforeEach((done) => {
   JSDOM.fromFile('../Fuel/views/fuelhistorymain.ejs')
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

describe("if (requestedHistory === 0) message", () => {
    it("message should say 'Oops! You dont have any history! Try adding something here.'", () => {
     let element = document.querySelector('p')
     expect(element).to.have.text("Oops! You dont have any history! Try adding something here.")
    })
   })

describe("Level 2 heading", () => {
    it("h2 element should say 'Quotation History'", () => {
     let element = document.querySelector('h2')
     expect(element).to.have.text("Quotation History")
    })
   })

})
