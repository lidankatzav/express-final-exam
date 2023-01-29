/**
 * BMI Calculator
 */

export const BmiStatus = {
    Underweight: 0,
    HealthyWeight: 1,
    Overweight: 2,
    Obesity: 3
}

export const WeightUnits = {
    KG: 0,     // kilograms
    G: 1,      // grams
    Pound: 2,  // lbs
}

export const HeightUnits = {
    CM: 0,     // centimeter
    M: 1,      // meter
    In: 2,     // inch
    Ft: 3,     // feet
}

export interface BmiInput {
    weight: number;
    weightUnit: number;
    height: number;
    heightUnit: number;
}

export interface BmiOutput {
    bmi: number;
    status: number;
}

/**
 * Takes a BmiInput object and return BmiOutput response
 */
export default function bmi(input: BmiInput): BmiOutput {
    let height = input.height;
    let weight = input.weight;
    if(input.heightUnit !== 1) {
        if(input.heightUnit === 0) {
            height = height/100;
        }
        if(input.heightUnit === 2) {
            height = height/39.370;
        }
        if(input.heightUnit === 3) {
            height = height/3.2808;
        }
    }
    if(input.weightUnit !== 0) {
        if(input.weightUnit === 1) {
            weight = weight/1000;
        }
        if(input.weightUnit === 2) {
            weight = weight/2.2046;
        }
    }
    const bmi = weight / (Math.pow(height, 2));
    let statusValue = 0;
    if(bmi < 18.5)  {
        statusValue = 0;
    }
    if(bmi >= 18.5 &&  bmi < 25) {
        statusValue = 1;
    }
    if(bmi >= 25 && bmi < 30) {
        statusValue = 2;
    }
    if(bmi > 30) {
        statusValue = 3;
    }
    return {status: statusValue, bmi: bmi};
}
