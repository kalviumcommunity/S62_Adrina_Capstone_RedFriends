const express = require('express');
const router = express.Router();
const {getAllRequests,getRequestById} = require('../controllers/bloodRequestController');

router.get('/', getAllRequests);
router.get('/:id',getRequestById);

module.exports = router;
