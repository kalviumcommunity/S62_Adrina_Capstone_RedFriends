const express = require('express');
const router = express.Router();
const {getAllRequests,getRequestById,createBloodRequest,updateBloodRequest} = require('../controllers/bloodRequestController');

router.get('/', getAllRequests);
router.get('/:id',getRequestById);
router.post('/create-bloodReq',  createBloodRequest); 
router.put('/update-bloodReq/:id', updateBloodRequest);

module.exports = router;
