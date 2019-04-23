#!/usr/bin/env node
'use strict'

const request = require('supertest');
const mock = require("./app.js")

describe('tests odata controllers', function () {
    it('should work', function (done) {
        this.timeout(10000);
        mock.then(function (app) {

            describe('GET ServiceRequestInteraction via API', function () {
                it('should return 200', function (done) {
                    request(app)
                        .get('/sap/byd/api/v1/c4codata/ServiceRequestInteractions')
                        .set('Accept', 'application/json')
                        .expect('Content-Type', 'application/json; charset=utf-8')
                        .expect(200, done)
                });
            });
            describe('GET ServiceRequestInteraction via ODATA', function () {
                it('should return 200', function (done) {
                    request(app)
                        .get('/sap/byd/odata/v1/c4codata/ServiceRequestInteractions')
                        .set('Accept', 'application/json')
                        .expect('Content-Type', 'application/json; charset=utf-8')
                        .expect(200, done)
                });
            });
            describe('GET odata metadata', function () {
                it('should return 200', function (done) {
                    request(app)
                        .get('/sap/byd/odata/v1/c4codata/$metadata')
                        .expect('Content-Type', 'application/xml; charset=utf-8')
                        .expect(200, done)
                });
            });
            describe('GET console', function () {
                it('should return 200', function (done) {
                    request(app)
                        .get('/sap/byd/api/v1/c4codata/console/')
                        .set('Accept', 'application/json')
                        .expect('Content-Type', 'text/html; charset=UTF-8')
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

            done()
        }).catch(error => done(error));
    });
});
