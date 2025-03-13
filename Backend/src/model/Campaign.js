const mongoose = require('mongoose');

const campaignSchema = new mongoose.Schema({
    title: { type: String, required: true },
    date: { type: Date, required: true },
    location: { type: String, required: true },
    organizer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    
    description: { type: String },
    number:{type:Number,required:true}
}, { timestamps: true });

module.exports = mongoose.model('Campaign', campaignSchema);
