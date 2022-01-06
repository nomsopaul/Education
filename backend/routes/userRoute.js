const express = require('express');
const router = express.Router();
const User = require ("../models/educationmodel")


router.route("/create").post((req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const institute_name = req.body.institute_name;

    const phone = req.body.phone;
    const country = req.body.country;
    const newUser = new User ({
        name,
        email,
        institute_name,
        phone,
        country,
    });


});



module.exports = router;


