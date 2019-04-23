#!/usr/bin/env node
'use strict'

const mock = require("@varkes/odata-mock")
const client = require("@varkes/app-connector-client")
const cockpit = require("@varkes/cockpit")
const app = require('express')()

var runAsync = async () => {
    var port
    if (process.argv.length > 2 && parseInt(process.argv[2])) {
        port = process.argv[2]
    }

    try {
        app.use(await mock.init("./varkes_config.json", __dirname))
        app.use(await client.init("./varkes_config.json", __dirname, process.env.NODE_PORT != -1 ? process.env.NODE_PORT : null))
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