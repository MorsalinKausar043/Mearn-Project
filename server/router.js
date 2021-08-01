const express = require('express');
const router = new express.Router();
const User = require("./models/conn");


// router data get 

router.get("/", (req, res) => {
    res.send("hello world");
});

router.get("/about", (req, res) => {
    res.send("hello world this is about page!");
});

router.get("/contact", (req, res) => {
    res.send("hello world this is contact page!");
});

router.get("/login", (req, res) => {
    res.send("hello world this is login page!");
});

router.get("/signup", (req, res) => {
    res.send("hello world this is signup page!");
});

// router post 

router.post("/registration", async (req, res) => {

    const { name, email, phone, work, password, cpassword } = req.body;

    if (!name || !email || !phone || !work || !password || !cpassword)
    {
        console.log("Please fill the all input box");
        res.status(422).json({error : "Please fill the all input box"});
    }
    
    try
    {
        const UserExits = await User.findOne({ email});
        
        if (UserExits)
        {
            console.log("2 time registration form log in!");
            res.status(422).json( {error : "2 time registration form log in!"});
        }
        
        const PostUserData = new User({name , email ,phone , work , password , cpassword});
        await PostUserData.save();
        res.status(201).json({massage : "save successfull!"});

        
    } catch (error) {
        res.status(422).json({error : error});
    }
});


// router exporting 

module.exports = router;