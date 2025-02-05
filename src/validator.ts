import type { NextFunction, Request, Response } from 'express';
import {WeightUnits, HeightUnits} from './bmi';

/**
 * The middleware should check if the payload valid
 * @param req
 * @param res
 * @param next
 */
export default function validator(req: Request, res: Response, next: NextFunction) {
    let weight = undefined;
    let height = undefined;
    let  weightUnit = undefined;
    let heightUnit = undefined;
    if(req.method === 'POST') {
         weight= req.body?.weight;
        height = req.body?.height;
         weightUnit = req.body?.weightUnit;
        heightUnit = req.body?.heightUnit;
    }
    else {
        weight = req.query?.weight as unknown as string;
        height = req.query?.height as unknown as string;
        weightUnit = req.query?.weightUnit;
        heightUnit = req.query?.heightUnit;
    }
    if(!weight || !height || !weightUnit || !heightUnit) {
        res.status(401).send({message: 'missing inputs'});
    }
    if(isNaN(Number(weight))) {
        res.status(401).send({message: 'weight is not number'});
    }
    if(isNaN(Number(height))) {
        res.status(401).send({message: 'height is not number'});
    }
    if(isNaN(Number(weightUnit))) {
        res.status(401).send({message: 'weightUnit is not number'});
    }
    if(isNaN(Number(heightUnit))) {
        res.status(401).send({message: 'heightUnit is not number'});
    }
    if(Number(weightUnit) < 0 && Number(weightUnit) > 2) {
        res.status(401).send({message: 'weightUnit should be 0-2'});
    }
    if(Number(heightUnit) < 0 && Number(heightUnit) > 3 ) {
        res.status(401).send({message: 'heightUnit should be 0-3'});
    }
    next();
}
