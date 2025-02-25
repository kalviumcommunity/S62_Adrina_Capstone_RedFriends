const express = require('express');
const router = express.Router();
const {getAllRequests,getRequestById} = require('../controllers/bloodRequestController');

router.get('/requests', getAllRequests);
router.get('/requests/:id',getRequestById);

module.exports = router;
