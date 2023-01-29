import express from 'express';
import bmi from "./bmi";

const app = express();

// TODO implement me :)

app.get('/bmi', function(req, res){
    const weight = req.query.weight;
    const height = req.query.height;
    const weightUnit = req.query.weightUnit;
    const heightUnit = req.query.heightUnit;
    res.send({weight, height, weightUnit, heightUnit})
  });

export default app;
