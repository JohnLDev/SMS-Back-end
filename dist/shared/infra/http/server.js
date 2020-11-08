"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("dotenv/config");
var express_1 = __importDefault(require("express"));
require("express-async-errors");
var routes_1 = __importDefault(require("./routes"));
require("../typeorm");
require("../../container");
var AppError_1 = __importDefault(require("../../errors/AppError"));
var upload_1 = __importDefault(require("../../../config/upload"));
var dotenv_1 = require("dotenv");
var Handler_1 = __importDefault(require("../../errors/Handler"));
var yup_1 = require("yup");
var cors_1 = __importDefault(require("cors"));
var path_1 = __importDefault(require("path"));
dotenv_1.config();
var app = express_1.default();
app.use(cors_1.default());
app.use(Handler_1.default);
app.use(express_1.default.json());
app.use('/files', express_1.default.static(upload_1.default.directory));
app.use(routes_1.default);
app.use('/uploads/images', express_1.default.static(path_1.default.join(__dirname, '..', '..', '..', 'upload', 'images')));
app.use(function (error, request, response, _next) {
    if (error instanceof yup_1.ValidationError) {
        var errors_1 = {};
        error.inner.forEach(function (err) {
            errors_1[err.path] = err.errors;
        });
        return response.status(400).json({ message: 'validation fails', errors: errors_1 });
    }
    if (error instanceof AppError_1.default) {
        return response.status(error.statusCode).json({
            status: 'client error',
            message: error.message,
        });
    }
    console.error(error);
    return response.status(500).json({ message: 'internal server error' });
});
app.listen(process.env.PORT || 3333, function () {
    console.log('🚀Server started on port 3333!');
});
