"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The middleware should check if the payload valid
 * @param req
 * @param res
 * @param next
 */
function validator(req, res, next) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    let weight = undefined;
    let height = undefined;
    let weightUnit = undefined;
    let heightUnit = undefined;
    if (req.method === 'POST') {
        weight = (_a = req.body) === null || _a === void 0 ? void 0 : _a.weight;
        height = (_b = req.body) === null || _b === void 0 ? void 0 : _b.height;
        weightUnit = (_c = req.body) === null || _c === void 0 ? void 0 : _c.weightUnit;
        heightUnit = (_d = req.body) === null || _d === void 0 ? void 0 : _d.heightUnit;
    }
    else {
        weight = (_e = req.query) === null || _e === void 0 ? void 0 : _e.weight;
        height = (_f = req.query) === null || _f === void 0 ? void 0 : _f.height;
        weightUnit = (_g = req.query) === null || _g === void 0 ? void 0 : _g.weightUnit;
        heightUnit = (_h = req.query) === null || _h === void 0 ? void 0 : _h.heightUnit;
    }
    if (!weight || !height || !weightUnit || !heightUnit) {
        res.status(401).send({ message: 'missing inputs' });
    }
    if (isNaN(Number(weight))) {
        res.status(401).send({ message: 'weight is not number' });
    }
    if (isNaN(Number(height))) {
        res.status(401).send({ message: 'height is not number' });
    }
    if (isNaN(Number(weightUnit))) {
        res.status(401).send({ message: 'weightUnit is not number' });
    }
    if (isNaN(Number(heightUnit))) {
        res.status(401).send({ message: 'heightUnit is not number' });
    }
    if (Number(weightUnit) < 0 && Number(weightUnit) > 2) {
        res.status(401).send({ message: 'weightUnit should be 0-2' });
    }
    if (Number(heightUnit) < 0 && Number(heightUnit) > 3) {
        res.status(401).send({ message: 'heightUnit should be 0-3' });
    }
    next();
}
exports.default = validator;
