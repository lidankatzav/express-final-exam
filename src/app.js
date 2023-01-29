"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bmi_1 = __importDefault(require("./bmi"));
const validator_1 = __importDefault(require("./validator"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/bmi', validator_1.default);
app.get('/bmi', function (req, res) {
    const weight = req.query.weight;
    const height = req.query.height;
    const weightUnit = req.query.weightUnit;
    const heightUnit = req.query.heightUnit;
    res.send((0, bmi_1.default)({ weight: Number(weight), height: Number(height), weightUnit: Number(weightUnit), heightUnit: Number(heightUnit) }));
});
app.post('/bmi', function (req, res) {
    const weight = req.body.weight;
    const height = req.body.height;
    const weightUnit = req.body.weightUnit;
    const heightUnit = req.body.heightUnit;
    res.send((0, bmi_1.default)({ weight: Number(weight), height: Number(height), weightUnit: Number(weightUnit), heightUnit: Number(heightUnit) }));
});
exports.default = app;
