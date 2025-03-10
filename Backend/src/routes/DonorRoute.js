const express = require('express');
const router = express.Router();
const {getAllDonors,getDonorById} = require('../controllers/donorController');

router.get('/', getAllDonors);
router.get('/:id',getDonorById);

module.exports = router;
