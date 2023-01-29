import express from 'express';
import bmi from "./bmi";
import validator from './validator';

const app = express();

app.use('/bmi', validator);

app.get('/bmi', function(req, res){
    const weight= req.query.weight;
    const height = req.query.height;
    const weightUnit = req.query.weightUnit;
    const heightUnit = req.query.heightUnit;
    res.send(bmi({weight: Number(weight), height: Number(height), weightUnit: Number(weightUnit), heightUnit: Number(heightUnit)}));
});

app.post('bmi', function(req, res){
    const weight= req.body.weight;
    const height = req.body.height;
    const weightUnit = req.body.weightUnit;
    const heightUnit = req.body.heightUnit;
    res.send(bmi({weight: Number(weight), height: Number(height), weightUnit: Number(weightUnit), heightUnit: Number(heightUnit)}));
});

export default app;
