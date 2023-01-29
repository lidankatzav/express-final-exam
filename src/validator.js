"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The middleware should check if the payload valid
 * @param req
 * @param res
 * @param next
 */
function validator(req, res, next) {
    var _a, _b, _c, _d;
    const weight = (_a = req.query) === null || _a === void 0 ? void 0 : _a.weight;
    const height = (_b = req.query) === null || _b === void 0 ? void 0 : _b.height;
    const weightUnit = (_c = req.query) === null || _c === void 0 ? void 0 : _c.weightUnit;
    const heightUnit = (_d = req.query) === null || _d === void 0 ? void 0 : _d.heightUnit;
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
