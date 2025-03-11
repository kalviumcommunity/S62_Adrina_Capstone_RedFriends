const express = require('express');
const router = express.Router();
const {getAllRequests,getRequestById,createBloodRequest} = require('../controllers/bloodRequestController');

router.get('/', getAllRequests);
router.get('/:id',getRequestById);
router.post('/create-bloodReq',  createBloodRequest); 

module.exports = router;
