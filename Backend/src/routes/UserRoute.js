const express = require('express');
const router = express.Router();
const {getAllUsers,getUserById,signup,login,updateUser} = require('../controllers/userController');


router.get('/',getAllUsers);
router.get('/:id', getUserById);
router.post('/signup',signup);
router.post('/login',login);
router.put('/update-user/:id', updateUser); 

module.exports = router;