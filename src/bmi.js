"use strict";
/**
 * BMI Calculator
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeightUnits = exports.WeightUnits = exports.BmiStatus = void 0;
exports.BmiStatus = {
    Underweight: 0,
    HealthyWeight: 1,
    Overweight: 2,
    Obesity: 3
};
exports.WeightUnits = {
    KG: 0,
    G: 1,
    Pound: 2, // lbs
};
exports.HeightUnits = {
    CM: 0,
    M: 1,
    In: 2,
    Ft: 3, // feet
};
/**
 * Takes a BmiInput object and return BmiOutput response
 */
function bmi(input) {
    let height = input.height;
    let weight = input.weight;
    if (input.heightUnit !== 1) {
        if (input.heightUnit === 0) {
            height = height / 100;
        }
        if (input.heightUnit === 2) {
            height = height / 39.370;
        }
        if (input.heightUnit === 3) {
            height = height / 3.2808;
        }
    }
    if (input.weightUnit !== 0) {
        if (input.weightUnit === 1) {
            weight = weight / 1000;
        }
        if (input.weightUnit === 2) {
            weight = weight / 2.2046;
        }
    }
    const bmi = weight / (Math.pow(height, 2));
    let statusValue = 0;
    if (bmi < 18.5) {
        statusValue = 0;
    }
    if (bmi >= 18.5 && bmi < 25) {
        statusValue = 1;
    }
    if (bmi >= 25 && bmi < 30) {
        statusValue = 2;
    }
    if (bmi > 30) {
        statusValue = 3;
    }
    return { status: statusValue, bmi: bmi };
}
exports.default = bmi;
