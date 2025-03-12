const express = require('express');
const router = express.Router();
const {getAllDonors,getDonorById,createDonor,updateDonor} = require('../controllers/donorController');

router.get('/', getAllDonors);
router.get('/:id',getDonorById);
router.post('/create-donor', createDonor);
router.put('/update-donor/:id', updateDonor); 
module.exports = router;
