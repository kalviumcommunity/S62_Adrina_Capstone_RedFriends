const express = require('express');
const router = express.Router();
const {getAllCampaigns,getCampaignById} = require('../controllers/campaignController');

router.get('/',getAllCampaigns);
router.get('/:id',getCampaignById);

module.exports = router;
