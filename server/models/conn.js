const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        uppercase: true,
        trim : true
    },
    email: {
        type: String,
        required : true,
    },
    phone: {
        type: Number,
        required : true
    },
    work: {
        type: String,
        required : true,
    },
    password: {
        type: String,
        required : true
    },
    cpassword: {
        type: String,
        required : true
    },
    tokens : [{
        token: {
            type: String,
            required : true
        }
    }],
    data: {
        type: Date,
        default : Date.now
    }
});

userSchema.methods.tokenGenerate = async function () {
    try
    {
        const token = await jwt.sign({ _id: this._id.toString() }, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({ token });
        await this.save;
        return token;
        
    } catch (error) {
        console.log(error);
    }
}

userSchema.pre("save", async function (next) {
    try
    {
        if (this.isModified("password"))
        {
            this.password = await bcrypt.hash(this.password, 10);
            this.cpassword = await bcrypt.hash(this.cpassword, 10);
        }

        next();
        
    } catch (error) {
        console.log(error)
    }
})

const User = new mongoose.model("USER", userSchema);

module.exports = User;