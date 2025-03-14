const express = require('express');
const router = express.Router();
const {getAllDonors,getDonorById,createDonor,updateDonor} = require('../controllers/donorController');
const verifyUser=require('../Middlewares/authMiddleware')

router.get('/', verifyUser,getAllDonors);
router.get('/:id',verifyUser,getDonorById);
router.post('/create-donor', verifyUser,createDonor);
router.put('/update-donor/:id', updateDonor); 
module.exports = router;
