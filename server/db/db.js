const mongoose = require("mongoose");
const DB = process.env.SECRET_MONGODB;

mongoose.connect(DB, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("mongoose connection Successfull!"))
    .catch((error) => console.log(error));