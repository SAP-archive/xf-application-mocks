#!/usr/bin/env node
'use strict'

const mock = require('@varkes/openapi-mock')
const client = require('@varkes/app-connector-client')
const cockpit = require("@varkes/cockpit")
const app = require('express')()
const orders = require('./orders.json');

var runAsync = async () => {
  var port
  if (process.argv.length > 2 && parseInt(process.argv[2])) {
    port = process.argv[2]
  }

  try {
    customizeMock(app)
    app.use(await mock.init("./varkes_config.json", __dirname))
    app.use(await client.init("./varkes_config.json", __dirname, process.env.NODE_PORT != -1 ? process.env.NODE_PORT : null))
    app.use(await cockpit.init())
    if (port)
      app.listen(port, function () {
        console.info("Started application on port %d", port)
      });
    return app
  } catch (error) {
    console.error("Problem while starting application: %s", error)
  }
}

function customizeMock(app) {
  app.get('/rest/v2/:baseSiteId/orders/:code', function (req, res, next) {
    // Customize the response body
    res.body = orders[req.params.code] || { orderId: req.params.code, totalPriceWithTax: { value: 100 }
    };

    // Let the Mock middleware apply usual chain
    next();
  });
  app.get('/rest/v2/:baseSiteId/users/:userId/orders', function (req, res, next) {
    // Customize the response body
    res.body = orders.all;
    // Let the Mock middleware apply usual chain
    next();
  });

  return app
}
module.exports = runAsync()
