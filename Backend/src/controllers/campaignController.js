const mongoose = require('mongoose');
const CampaignModel = require('../model/Campaign');
    const getAllCampaigns = async (req, res) => {
        try {
            const campaigns = await CampaignModel.find().populate('organizer', 'name email');
            res.status(200).json(campaigns);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    const getCampaignById=async (req, res) => {
        const { id } = req.params;
        try {
            if (!mongoose.Types.ObjectId.isValid(id)) {
                return res.status(400).send({ message: 'Send valid campaign ID' });
            }

            const campaign = await CampaignModel.findById(id).populate('organizer', 'name email');
            if (!campaign) return res.status(404).json({ message: 'Campaign not found' });

            res.status(200).json(campaign);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }


module.exports = {getAllCampaigns,getCampaignById};
