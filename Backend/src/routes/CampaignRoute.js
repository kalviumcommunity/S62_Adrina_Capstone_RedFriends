const express = require('express');
const router = express.Router();
const {getAllCampaigns,getCampaignById} = require('../controllers/campaignController');

router.get('/campaigns',getAllCampaigns);
router.get('/campaigns/:id',getCampaignById);

module.exports = router;
