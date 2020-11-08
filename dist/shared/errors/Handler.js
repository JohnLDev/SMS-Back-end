"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var yup_1 = require("yup");
var errorHandler = function (error, request, response, _next) {
    if (error instanceof yup_1.ValidationError) {
        var errors_1 = {};
        error.inner.forEach(function (err) {
            errors_1[err.path] = err.errors;
        });
        return response.status(400).json({ message: 'validation fails', errors: errors_1 });
    }
    console.error(error);
    return response.status(500).json({ message: 'mama' });
};
exports.default = errorHandler;
