#!/usr/bin/env node
'use strict'

const config = require("@varkes/configuration")
const mock = require("@varkes/openapi-mock")
const app = require('express')()

var runAsync = async () => {
    var port
    if (process.argv.length > 2 && parseInt(process.argv[2])) {
        port = process.argv[2]
    }

    try {
        let configuration = config.resolveFile("./varkes_config.json")
        app.use(await mock.init(configuration))
        if (port)
            app.listen(port, function () {
                console.info("Started application on port %d", port)
            });
        return app
    } catch (error) {
        console.error("Problem while starting application: %s", error)
    }
}

module.exports = runAsync()
