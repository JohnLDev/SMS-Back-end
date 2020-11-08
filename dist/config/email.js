"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var nodemailer_1 = __importDefault(require("nodemailer"));
var dotenv_1 = require("dotenv");
dotenv_1.config();
var Mailer = nodemailer_1.default.createTransport({
    host: process.env.SMTP_HOST,
    port: 587,
    auth: {
        user: 'apikey',
        pass: process.env.EMAIL_API_KEY,
    },
});
exports.default = Mailer;
