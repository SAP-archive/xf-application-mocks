#!/usr/bin/env node
'use strict'

const request = require('supertest');
const mock = require("./app")

describe('tests app', function () {
    it('should work', function (done) {
        mock.then(function (app) {

            describe('GET console', function () {
                it('should return 200', function (done) {
                    request(app)
                        .get('/v1/console')
                        .expect(200)
                        .expect('Content-Type', 'text/html; charset=utf-8', done)
                });
            });
            describe('GET metadata', function () {
                it('should return 200', function (done) {
                    request(app)
                        .get('/v1/api')
                        .expect(200)
                        .expect('Content-Type', 'text/x-yaml; charset=utf-8', done)
                });
            });
            describe('GET applications valid', function () {
                it('should return 200', function (done) {
                    request(app)
                        .get('/v1/applications')
                        .set('xf-account-id', 'a')
                        .set('xf-account-type', 'scp')
                        .expect(200)
                        .expect('Content-Type', 'application/json; charset=utf-8')
                        .expect(/\[\]/, done)
                        
                });
            });
            describe('GET applications invalid', function () {
                it('should return 400', function (done) {
                    request(app)
                        .get('/v1/applications')
                        .set('xf-account-id', 'a')
                        .set('xf-account-type', 'a')
                        .expect(400)
                        .expect('Content-Type', 'application/json; charset=utf-8', done)
                });
            });

            done()
        }).catch(error => done(error));
    });
});
