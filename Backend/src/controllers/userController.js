const mongoose = require('mongoose');
const UserModel = require('../model/User');

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
    
const createUser = async (req, res) => {
    try {
        const { name, email, password, phone, bloodGroup, location, isDonor } = req.body;
    
            
        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already in use, try loggin in' });
        }
    
            
        const newUser = new UserModel({
            name,
            email,
            password,
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

module.exports = {getUserById,getAllUsers,createUser};
