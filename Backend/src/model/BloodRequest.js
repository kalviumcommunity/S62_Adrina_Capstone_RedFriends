const mongoose = require('mongoose');

const bloodRequestSchema = new mongoose.Schema({
    patientName: { type: String, required: true },
    bloodGroup: { type: String, required: true },
    units: { type: Number, required: true },
    hospital: { type: String, required: true },
    city: { type: String, required: true },
    date: { type: Date, default: Date.now },
    requester: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    status: { type: String, enum: ['Pending', 'Accepted', 'Completed'], default: 'Pending' },
}, { timestamps: true });



module.exports = mongoose.model('BloodRequest', bloodRequestSchema);
