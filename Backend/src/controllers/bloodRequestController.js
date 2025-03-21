const mongoose = require('mongoose');
const BloodRequestModel = require('../model/BloodRequest');

const getAllRequests=async (req, res) => {
        try {
            const requests = await BloodRequestModel.find().populate('requester', 'name email');
            res.status(200).json(requests);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
}

const getRequestById=async (req, res) => {
        const { id } = req.params;
        try {
            if (!mongoose.Types.ObjectId.isValid(id)) {
                return res.status(400).send({ message: 'Send valid request ID' });
            }

            const request = await BloodRequestModel.findById(id).populate('requester', 'name email');

            if (!request) return res.status(404).json({ message: 'Request not found' });

            res.status(200).json(request);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }    
    }

const createBloodRequest = async (req, res) => {
    try {
        const { patientName, bloodGroup, units, hospital, city, status,requester } = req.body;
        
        // if (!mongoose.Types.ObjectId.isValid(requester)) {
        //     return res.status(400).send({ message: 'Send valid requester ID' });
        // }
        // const requester=req.userId
    
        const newRequest = await BloodRequestModel.create({
            patientName,
            bloodGroup,
            units,
            hospital,
            city,
            requester,
            status
        });
    
        res.status(201).json(newRequest);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateBloodRequest = async (req, res) => {
    try {
        const { id } = req.params;
        const { patientName, bloodGroup, units, hospital, city, status } = req.body;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).send({ message: 'Invalid blood request ID' });
        }

        const updatedRequest = await BloodRequestModel.findByIdAndUpdate(
            id,
            { patientName, bloodGroup, units, hospital, city, status },
            { new: true }
        );

        if (!updatedRequest) return res.status(404).json({ message: 'Request not found' });

        res.status(200).json(updatedRequest);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


module.exports ={getAllRequests,getRequestById,createBloodRequest,updateBloodRequest};
