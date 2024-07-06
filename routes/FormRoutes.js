// const express = require('express');
import express from 'express';
import {saveFormData} from '../controllers/FromController.js'
const router = express.Router();

// const {saveFormData} = require('../controllers/FromController')

router.post('/saveFormData' , saveFormData);

// module.exports = router;
export default router;