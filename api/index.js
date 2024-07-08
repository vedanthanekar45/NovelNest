const express = require("express")
const cors = require('cors');
const mongoose = require('mongoose');
const userModel = require('./models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');

const port = 3000;
const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());
dotenv.config({path: "./.env"});

mongoose.connect("mongodb://localhost:27017/NovelNest");

app.post('/login', async (req, res) => {
    // taking the username and password from the frontend
    const {username, password} = req.body;

    // Validation
    if (!(username && password)) {
        res.status(400).send("Incomplete data!")
    }

    // Finding the required user from the database
    const user = await userModel.findOne({username})
    if (user && (await bcrypt.compare(password, user.password))) {
        
        // Generate a token for user
        jwt.sign(
            {id: user._id, email: user.email}, process.env.jwtSecret
        );
        user.token = token
        use.password = undefined

        // Send user in user cookie
        const options = {
            expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
            /* The numbers above convert the days into milliseconds. In
            place of 3, we can replace the number of days we want the cookie to be active */
            httpOnly: true
        };
        res.status(200).cookie("token", token, options).json({
            success: true,
            token,
            user
        })
        res.status(201).json(user);
    } else {
        res.status(401).send("User not found!");
    }

})

app.post('/register', async (req, res) => {
    const {firstname, lastname, email, username, password} = req.body;

    try {
        // Checking if all fields are field completely, if not throw a message --->
        if (!(firstname && lastname && email && username && password)) {
            res.status(401).send("All fields are important !")
        }

         // Encrypting the password using hashing
         const encPassword = await bcrypt.hash(password, 10);

        // Create the user in the database
        const user = await userModel.create({
            firstname,
            lastname,
            email,
            username,
            password: encPassword
        })

        // Generate a token for user
        const token = jwt.sign({id: user._id, email: user.email,}, process.env.jwtSecret)
        user.token = token;
        user.password = undefined;

    } catch (error) {
        console.log(error);
    }

})

app.listen (port, () => {
    console.log(`Server's running on port ${port}`);
})