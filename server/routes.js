const path = require('path');
const fs = require('fs');
const db = require('./db');

const appRouter = function(app) {
    // app.get("/", function(req, res) {
    //     res.sendFile(path.join(__dirname + '/../public/index.html'));
    // });
    // app.get("/detail", function(req, res) {
    //     res.sendFile(path.join(__dirname + '/../public/index.html'));
    // });
    app.get("/assets/:file", function(req, res) {
        res.sendFile(path.join(__dirname + '/../public/' + req.params.file));
    });

    app.get("/api/search/:search?", function(req, res) {
        res.send(db.search(req.params.search || "")); // TODO: add error handler
    });

    app.get("/api/newest/:page", function(req, res) {
        res.send(db.newest(req.params.page || 1)); // TODO: add error handler
    });

    app.get("/api/detail/:id", function(req, res) {
        res.send(db.getOne(req.params.id || 1)); // TODO: add error handler
    });

    app.get("/*", function(req, res) {
        res.sendFile(path.join(__dirname + '/../public/index.html'));
    });
};

module.exports = appRouter;