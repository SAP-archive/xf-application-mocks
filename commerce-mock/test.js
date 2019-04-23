#!/usr/bin/env node
'use strict'

const request = require('supertest');
const mock = require("./app.js")

describe('test app', function () {
    it('should work', function (done) {
        this.timeout(10000);
        mock.then(function (app) {

            describe('GET console', function () {
                it('should return 200', function (done) {
                    request(app)
                        .get('/rest/v2/console')
                        .expect('Content-Type', 'text/html; charset=utf-8')
                        .expect(200, done)
                });
            });
            describe('GET metadata', function () {
                it('should return 200', function (done) {
                    request(app)
                        .get('/metadata')
                        .expect('Content-Type', 'text/yaml; charset=UTF-8')
                        .expect(200, done)
                });
            });
            describe('GET connection info', function () {
                it('should return 400', function (done) {
                    request(app)
                        .get('/connection')
                        .set('Accept', 'application/json')
                        .expect('Content-Type', 'application/json; charset=utf-8')
                        .expect(400, done)
                });
            });
            describe('GET overwritten response for orders', function () {
                it('should return response 200', function (done) {
                    request(app)
                        .get("/rest/v2/electronics/orders/icke")
                        .set('Accept', 'application/json')
                        .expect('Content-Type', 'application/json; charset=utf-8')
                        .expect(/"orderId":"icke"/)
                        .expect(200, done)
                });
            });

            done()
        }).catch(error => done(error));
    });
});
