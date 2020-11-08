"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function FormatData(data) {
    var date = new Date(data);
    var mnth = ('0' + (date.getMonth() + 1)).slice(-2);
    var day = ('0' + date.getDate()).slice(-2);
    return [day, mnth, date.getFullYear()].join('/');
}
exports.default = FormatData;
