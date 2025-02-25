const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/UserRoute');
const donorRoutes = require('./routes/DonorRoute');
const campaignRoutes = require('./routes/CampaignRoute');
const bloodRequestRoutes = require('./routes/BloodRequestRoute');

const app = express();

app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/donors', donorRoutes);
app.use('/api/campaigns', campaignRoutes);
app.use('/api/requests', bloodRequestRoutes);

app.listen(8080,async()=>{
  console.log(`server running on http://localhost:8080`)
})