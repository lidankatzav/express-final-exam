"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app_1 = __importDefault(require("./app"));
// required for displaying the UI (for your convince)
app_1.default.use(express_1.default.static('public'));
app_1.default.use(express_1.default.json());
// starting the application
app_1.default.listen(3003, () => console.log('Server is listening'));
