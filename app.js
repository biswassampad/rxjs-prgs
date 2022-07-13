"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
(0, rxjs_1.of)(1, 2, 3)
    .pipe((0, rxjs_1.map)(function (x) { return x * x; }))
    .subscribe(function (v) { return console.log("value: ".concat(v)); });
// Logs:
// value: 1
// value: 4
// value: 9
