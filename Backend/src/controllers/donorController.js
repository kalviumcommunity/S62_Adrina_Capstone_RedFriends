const mongoose = require('mongoose');
const DonorModel = require('../model/Donor');

   const getAllDonors=async (req, res) => {
        try {
            const donors = await DonorModel.find().populate('user', 'name email bloodGroup phone');
            res.status(200).json(donors);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    const getDonorById= async (req, res) => {
        const { id } = req.params;
        try {
            if (!mongoose.Types.ObjectId.isValid(id)) {
                return res.status(400).send({ message: 'Send valid donor ID' });
            }

            const donor = await DonorModel.findById(id).populate('user', 'name email bloodGroup phone');
            
            if (!donor) return res.status(404).json({ message: 'Donor not found' });

            res.status(200).json(donor);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    
const createDonor = async (req, res) => {
    try {
        const { user, lastDonationDate, availability } = req.body;
    
        if (!mongoose.Types.ObjectId.isValid(user)) {
            return res.status(400).send({ message: 'Send valid user ID' });
        }
    
        const newDonor = await DonorModel.create({
            user,
            lastDonationDate,
            availability
        });
    
        res.status(201).json(newDonor);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateDonor = async (req, res) => {
    const { id } = req.params;
    const { lastDonationDate, availability } = req.body;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).send({ message: 'Send valid donor ID' });
        }

        const updatedDonor = await DonorModel.findByIdAndUpdate(
            id,
            { lastDonationDate, availability },
            { new: true, runValidators: true }
        );

        if (!updatedDonor) return res.status(404).json({ message: 'Donor not found' });

        res.status(200).json(updatedDonor);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


module.exports = { getAllDonors, getDonorById, createDonor,updateDonor};

