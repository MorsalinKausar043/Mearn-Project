const mongoose = require("mongoose");
const DB = process.env.SECRET_MONGODB;

// const DB = "mongodb+srv://MorsalinKausar:Morsalin2002@cluster0.lvyry.mongodb.net/mearnstack?retryWrites=true&w=majority";

mongoose.connect(DB, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("mongoose connection Successfull!"))
    .catch((error) => console.log(error));