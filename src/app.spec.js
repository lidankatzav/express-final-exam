"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const supertest_1 = __importDefault(require("supertest"));
const ValidRequestPayload = {
    height: '180',
    heightUnit: '0',
    weight: '80',
    weightUnit: '0'
};
const FormPayload = new URLSearchParams(ValidRequestPayload).toString();
describe('E2E (endpoints testing)', () => {
    describe('POST', () => {
        it('should response to FORM data', () => {
            return (0, supertest_1.default)(app_1.default)
                .post('/bmi')
                .send(FormPayload)
                .expect(200);
        });
        it.skip('should response to JSON data', () => {
            return (0, supertest_1.default)(app_1.default)
                .post('/bmi')
                .set('content-type', 'application/json')
                .send(ValidRequestPayload)
                .expect(200);
        });
    });
});
