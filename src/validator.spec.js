"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
// import { validate } from './validator';
describe('validate', () => {
    it('should pass for valid input', () => {
        const input = {
            weight: '1',
            height: '2.5',
            weightUnit: '3',
            heightUnit: '4'
        };
        (0, chai_1.expect)(validate(input)).to.be.true;
    });
    it('should pass for missing field', () => {
        const input = {
            weight: '1',
            height: '2.5',
            weightUnit: '3',
        };
        (0, chai_1.expect)(validate(input)).to.be.false;
    });
});
