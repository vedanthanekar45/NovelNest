const express = require("express")
const cors = require('cors');
const mongoose = require('mongoose');
const userModel = require('./models/user')

const port = 3000;
const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/NovelNest");

app.post('/login', (req, res) => {
    const {username, password} = req.body;
    userModel.findOne({username: username})
    .then(user => {
        if(user) {
            if(user.password === password) {
                res.json("Success")
            } else {
                res.json("Password is incorrect")
            }
        } else {
            res.json("No record found of the said user.");
        }
    })
})

app.post('/register', (req, res) => {
    userModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.listen (port, () => {
    console.log(`Server's running on port ${port}`);
})