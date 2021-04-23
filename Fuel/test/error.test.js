const { expect } = require('chai');
const chai = require('chai');
const { JSDOM } = require('jsdom');
const error = require('../views/error.ejs')
chai.use(require('chai-dom'));
require('jsdom-global')();

describe('error.ejs', () => {
  beforeEach((done) => {
   JSDOM.fromFile('../Fuel/views/error.ejs')
   .then((dom) => {
     global.document = dom.window.document
   })
 .then(done, done);
 })

describe("Title", () => {
    it("title element should say 'Error!'", () => {
     let element = document.querySelector('title')
     expect(element).to.have.text("Error!")
    })
   })

describe("Error Code", () => {
    it("Error Code 403 FORBIDDEN should be displayed", () => {
     let element = document.getElementById('text')
     expect(element).to.have.text("403 FORBIDDEN")
    })
   })

describe("Error Message", () => {
    it("Error message should display 'Maybe try authenticating yourself?'", () => {
     let element = document.getElementById('credit')
     expect(element).to.have.text("Maybe try authenticating yourself?")
    })
   })

})
