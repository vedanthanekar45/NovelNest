const express = require("express")
const cors = require('cors');
const mongoose = require('mongoose');
const userModel = require('./models/user')

const port = 3000;
const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/NovelNest");

app.post('/login', async (req, res) => {

    // taking the username and password from the input fields
    const {username, password} = req.body;

    // Finding the required user from the database
    await userModel.findOne({username: username})
    .then(user => {
        if(user) {

            // If username found, then check the password
            if(user.password === password) {
                res.json("Success")
            } else {
                res.json("Password is incorrect")
            }
        } 
        // If username is not found
        else {
            res.json("No record found of the said user.");
        }
    })
})

app.post('/register', async (req, res) => {
    const {firstname, lastname, email, username, password} = req.body;

    // Checking if all fields are field completely, if not throw a message --->
    if (!(firstname && lastname && email && username && password)) {
        res.status(401).send("All fields are important !")
    }

    // Create the user in the database
    const user = await userModel.create({
        firstname,
        lastname,
        email,
        username,
        password
    })
})

app.listen (port, () => {
    console.log(`Server's running on port ${port}`);
})