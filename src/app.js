"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
// TODO implement me :)
app.get('/bmi', function (req, res) {
    const weight = req.query.weight;
    const height = req.query.height;
    const weightUnit = req.query.weightUnit;
    const heightUnit = req.query.heightUnit;
    res.send({ weight, height, weightUnit, heightUnit });
});
exports.default = app;
