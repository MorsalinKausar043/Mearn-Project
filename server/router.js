const express = require('express');
const router = new express.Router();
const User = require("./models/conn");
const bcrypt = require("bcryptjs");


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
        const UserExits = await User.findOne({ email });
        
        if (UserExits)
        {
            console.log("2 time registration form log in!");
            res.status(422).json({ error: "2 time registration form log in!" });
        }
        else if (password !== cpassword)
        {
            res.status(422).json({ error: "invalid details" });
        } else
        {
            const PostUserData = new User({ name, email, phone, work, password, cpassword });
            const token = await PostUserData.tokenGenerate();
            res.cookie("jwt", token, {
                expires: new Date(Date.now() + 200000),
                httpOnly: true
            });
            await PostUserData.save();
            res.status(201).json({massage : "save successfull!"}); 
        }
                    
    } catch (error) {
        res.status(422).json({ error: error });
        console.log(error)
    }
});

// login post 

router.post("/login", async (req, res) => {
    try
    {
        const { email, password } = req.body;

        if (!email || !password)
        {
            res.status(422).json({ error: "plz fill the all input form!" });
        } else
        {
            const UserLogData = await User.findOne({ email });
            const isMatch = await bcrypt.compare(password, UserLogData.password);

            const token = await UserLogData.tokenGenerate();
            res.cookie("jwt", token, {
                expires: new Date(Date.now() + 200000),
                httpOnly: true
                // secure : true
            });

            isMatch ? res.status(201).json({ massage: "Successful login!" }) : res.status(201).json({ error: "unsuccessful error!" });
        }
        
    } catch (error)
    {
        res.status(422).json({ error: "invalid details!" });
        console.log(error);
    }
})

// router exporting 

module.exports = router;