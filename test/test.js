"use strict";

process.env.NODE_ENV = 'test';

var chai = require('chai');
chai.use(require('chai-http'));
var expect = require('chai').expect;
var app = require('../server.js');
describe('Test type 1', () => {


    // it('GET /', (done) => {
    //   chai.request(app)
    //     .get('/')
    //     .end((err, res) => {
    //       expect(res).to.have.status(404);
    //       done(); // do not pass err here, will be errors
    //     });
    // });
    
    // it('GET /api/', (done) => {
    //     chai.request(app)
    //     .get(`/api/`)
    //     .end(function(err, res) {
    //         expect(err).to.be.null;
    //         expect(res).to.be.json;
    //         expect(res).to.have.status(200);
    //         expect(res.body).to.have.property('message', 'Hello World!');
    //         done(err);
    //     });
    // });

});
