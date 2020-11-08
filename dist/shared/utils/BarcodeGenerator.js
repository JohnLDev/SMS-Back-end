"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uuid_1 = require("uuid");
function GenerateBarcode() {
    var id = uuid_1.v4();
    var _a = id.split('-'), frist = _a[0], second = _a[1];
    var barcode = frist + second;
    return barcode;
}
exports.default = GenerateBarcode;
