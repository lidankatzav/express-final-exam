import express from 'express';
import app from './app';

// required for displaying the UI (for your convince)
app.use(express.static('public'));

app.use(express.json());

// starting the application
app.listen(3001, () => console.log('Server is listening'));
