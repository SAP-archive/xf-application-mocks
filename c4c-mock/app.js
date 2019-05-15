#!/usr/bin/env node
'use strict'

const mock = require("@varkes/odata-mock")
const server = require("@varkes/api-server")
const cockpit = require("@varkes/cockpit")
const app = require('express')()

var runAsync = async () => {
    var port
    if (process.argv.length > 2 && parseInt(process.argv[2])) {
        port = process.argv[2]
    }

    try {
        app.use(await mock.init("./varkes_config.json", __dirname))
        app.use(await server.init("./varkes_config.json", __dirname))
        app.use(await cockpit.init())
        if (port)
            app.listen(port, function () {
                console.info("Started application on port %d", port)
            })
        return app
    } catch (error) {
        console.error("Problem while starting application: %s", error)
    }
}

module.exports = runAsync()