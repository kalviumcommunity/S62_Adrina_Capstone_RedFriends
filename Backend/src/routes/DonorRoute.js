const express = require('express');
const router = express.Router();
const {getAllDonors,getDonorById,createDonor} = require('../controllers/donorController');

router.get('/', getAllDonors);
router.get('/:id',getDonorById);
router.post('/create-donor', createDonor);
module.exports = router;
