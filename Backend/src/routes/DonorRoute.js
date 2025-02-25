const express = require('express');
const router = express.Router();
const {getAllDonors,getDonorById} = require('../controllers/donorController');

router.get('/donors', getAllDonors);
router.get('/donors/:id',getDonorById);

module.exports = router;
