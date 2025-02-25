const mongoose = require('mongoose');

const donorSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    lastDonationDate: { type: Date },
    availability: { type: Boolean, default: true },
}, { timestamps: true });

module.exports = mongoose.model('Donor', donorSchema);
