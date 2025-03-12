const express = require('express');
const router = express.Router();
const {getAllCampaigns,getCampaignById,createCampaign,updateCampaign} = require('../controllers/campaignController');

router.get('/',getAllCampaigns);
router.get('/:id',getCampaignById);
router.post('/create-campaign',createCampaign);
router.put('/update-campaign/:id', updateCampaign);

module.exports = router;
