import express from 'express';
import { esewaPayment } from '../controllers/esewa.js';

const router = express.Router();

router.post("/esewa", esewaPayment);

export default router;