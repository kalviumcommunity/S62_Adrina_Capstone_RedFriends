const express = require('express');
const router = express.Router();
const {getAllUsers,getUserById,createUser,updateUser} = require('../controllers/userController');

router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.post('/create-user',createUser);
router.put('/update-user/:id', updateUser); 

module.exports = router;