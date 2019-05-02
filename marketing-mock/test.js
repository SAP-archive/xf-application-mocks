#!/usr/bin/env node
'use strict'

const request = require('supertest');
const mock = require("./app.js")

describe('tests odata controllers', function () {
    it('should work', function (done) {
        this.timeout(10000);
        mock.then(function (app) {

            describe('GET Campaigns via API', function () {
                it('should return 200', function (done) {
                    request(app)
                        .get('/sap/opu/api/sap/API_MKT_CAMPAIGN_SRV/Campaigns')
                        .set('Accept', 'application/json')
                        .expect('Content-Type', 'application/json; charset=utf-8')
                        .expect(200, done)
                });
            });
            describe('GET Campaigns via ODATA', function () {
                it('should return 200', function (done) {
                    request(app)
                        .get('/sap/opu/odata/sap/API_MKT_CAMPAIGN_SRV/Campaigns')
                        .set('Accept', 'application/json')
                        .expect('Content-Type', 'application/json; charset=utf-8')
                        .expect(200, done)
                });
            });
            describe('GET MarketingArea via API', function () {
                it('should return 200', function (done) {
                    request(app)
                        .get('/sap/opu/api/sap/API_MKT_CONTACT_SRV/MarketingAreas')
                        .set('Accept', 'application/json')
                        .expect('Content-Type', 'application/json; charset=utf-8')
                        .expect(200, done)
                });
            });
            describe('GET MarketingArea via ODATA', function () {
                it('should return 200', function (done) {
                    request(app)
                        .get('/sap/opu/odata/sap/API_MKT_CONTACT_SRV/MarketingAreas')
                        .set('Accept', 'application/json')
                        .expect('Content-Type', 'application/json; charset=utf-8')
                        .expect(200, done)
                });
            });
            describe('GET odata metadata', function () {
                it('should return 200', function (done) {
                    request(app)
                        .get('/sap/opu/odata/sap/API_MKT_CAMPAIGN_SRV/$metadata')
                        .expect('Content-Type', 'application/xml; charset=utf-8')
                        .expect(200, done)
                });
            });
            describe('GET console', function () {
                it('should return 200', function (done) {
                    request(app)
                        .get('/sap/opu/api/sap/API_MKT_CAMPAIGN_SRV/console/')
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
            describe('GET app info', function () {
                it('should return 200', function (done) {
                    request(app)
                        .get('/info')
                        .set('Accept', 'application/json')
                        .expect('Content-Type', 'application/json; charset=utf-8')
                        .expect(200, done)
                });
            });

            done()
        }).catch(error => done(error));
    });
});
