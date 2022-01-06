const mongoose = require('mongoose');

const userSChema = {
    name: String,
    email: String,
    institute_name: String,
    phone: String,
    country: String,
}


const User = mongoose.model("User", userSChema)

module.exports= User;





