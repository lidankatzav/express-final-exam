import express from 'express';
import app from './app';

// required for displaying the UI (for your convince)
app.use(express.static('public'));

app.use(express.json());

// starting the application
app.listen(3003, () => console.log('Server is listening'));
