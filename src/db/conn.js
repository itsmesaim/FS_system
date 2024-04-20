const dotenv = require("dotenv");
dotenv.config();
const mongoose = require('mongoose');

mongoose.set("strictQuery", false);

mongoose.connect("mongodb+srv://saimkaskar1:l7TXntK1l6h8vKct@cluster0.nhzz0a4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
        console.log(`Successfully Connected to Mongodb`);
    }).catch((e) => {
        console.log("Unable to Connect to Mongodb ", e);
    })

