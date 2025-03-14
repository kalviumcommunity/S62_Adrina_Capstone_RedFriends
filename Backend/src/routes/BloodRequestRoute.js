const express = require('express');
const router = express.Router();
const {getAllRequests,getRequestById,createBloodRequest,updateBloodRequest} = require('../controllers/bloodRequestController');
const verifyUser=require('../Middlewares/authMiddleware')

router.get('/', verifyUser,getAllRequests);
router.get('/:id',verifyUser,getRequestById);
router.post('/create-bloodReq', verifyUser,createBloodRequest); 
router.put('/update-bloodReq/:id', updateBloodRequest);

module.exports = router;
