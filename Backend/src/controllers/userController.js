const mongoose = require('mongoose');
const UserModel = require('../model/User');
require('dotenv').config()
const jwt=require('jsonwebtoken')

const bcrypt=require('bcryptjs')
const cookieParser=require('cookie-parser')
    const getAllUsers=async (req, res) => {
        try {
            const users = await UserModel.find();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    const getUserById=async (req, res) => {
        const { id } = req.params;
        try {
            if (!mongoose.Types.ObjectId.isValid(id)) {
                return res.status(400).send({ message: 'Send valid user ID' });
            }

            const user = await UserModel.findById(id);
            if (!user) return res.status(404).json({ message: 'User not found' });

            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    
const signup = async (req, res) => {
    try {
        const { name, email, password, phone, bloodGroup, location, isDonor } = req.body;
    
            
        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already in use, try loggin in' });
        }
    
        const hashedPassword= await bcrypt.hash(password,10);    
        const newUser = new UserModel({
            name,
            email,
            password:hashedPassword,
            phone,
            bloodGroup,
            location,
            isDonor
        });
    
        await newUser.save();
        return res.status(201).json({ message: 'User registered successfully', user: newUser });

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};


const login = async(req,res)=>{
    try{

        const {email,password}= req.body;
        const user = await UserModel.findOne({email});
        if(!user){
            return res.status(400).json({message:'Invalid email or password'})
        }
    
        const isMatch= await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(400).json({message:'Invalid email or password'})
        }
        
        const token = jwt.sign({userId: user._id,email:user.email},process.env.JWT_SECRETKEY,{expiresIn:'1h'})

        res.status(200).cookie('token',token).json({ message: 'Login successful', token });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
}
}



const updateUser = async (req, res) => {
    const { id } = req.params;
    const { name, email, password, phone, location, isDonor } = req.body;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: 'Invalid user ID' });
        }

        const updatedUser = await UserModel.findByIdAndUpdate(
            id,
            { name, email, password, phone, location, isDonor },
            { new: true, runValidators: true }
        );

        if (!updatedUser) return res.status(404).json({ message: 'User not found' });

        res.status(200).json({ message: 'User updated successfully', user: updatedUser });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {getUserById,getAllUsers,signup,login,updateUser};
