const express = require('express');
const router = express.Router();
const {getAllCampaigns,getCampaignById,createCampaign,updateCampaign} = require('../controllers/campaignController');
const verifyUser=require('../Middlewares/authMiddleware')

router.get('/',verifyUser,getAllCampaigns);
router.get('/:id',verifyUser,getCampaignById);
router.post('/create-campaign',verifyUser,createCampaign);
router.put('/update-campaign/:id', updateCampaign);

module.exports = router;
