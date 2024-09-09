const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController')

router.get('/users',(req,res)=>{
    UserController.getUsers(req,res)
})

//localhost/user/10
router.get('/user/:id',(req,res)=>{
    UserController.getUser(req,res)
})


module.exports=router;