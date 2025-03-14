const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/UserRoute');
const donorRoutes = require('./routes/DonorRoute');
const campaignRoutes = require('./routes/CampaignRoute');
const bloodRequestRoutes = require('./routes/BloodRequestRoute');
// const connectDB=require('./DB/database')
require('dotenv').config();
const app = express();

app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/donors', donorRoutes);
app.use('/api/campaigns', campaignRoutes);
app.use('/api/requests', bloodRequestRoutes);

// connectDB()
// console.log(process.env.DB_URL)
 mongoose.connect(process.env.DB_URL)
        .then(()=>console.log("Database connected"))
        .catch((err)=>console.log("Error connecting",err))

const PORT=3000
app.listen(PORT,async()=>{
  console.log(`Server running on http://localhost:${PORT}`)
})