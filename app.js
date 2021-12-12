const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = require('./models/User');
const bcrypt = require('bcrypt');
const { ResumeToken } = require('mongodb');


mongoose.connect('mongodb+srv://devmocho:powerpuff12345@todo-app.hgwdw.mongodb.net/mern-todo-app')



app.use(cors());
app.use((bodyParser.json()));
app.use(bodyParser.urlencoded({ extended: false}));

app.post('/signup', (req, res) => {
    const newUser =new User({
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password, 10)
    });

    newUser.save(err =>{
        if (err){
            return res.status(400).json({
                title: 'error',
                error: 'Email already in use'
            })
        }
        return res.status(200).json({
            title: 'user successfully added'
        })
    })
});

app.post('/login', (req,res) => {
    User.findOne({ username: req.body.username}, (err, user) => {
        if (err) return res.status(500).json({
            title: 'server error',
            error: err
        });
        if (!user) {
            return res.status(400).json({
                title: 'user is not found',
                error: 'invalid username or password'
            })
        }
        if (!bcrypt.compareSync(req.body.password, user.password)) {
            return res.status(401).json({
                title: 'login failed',
                error: 'invalid username or password'
            })
        }
        // auth is done 
        let token = jwt.sight({ userId: user._id}, 'secretkey');
        return res.status(200).json({
            title: 'login successful',
            token: token
        });
    })
})

const port = process.env.PORT || 5000;



app.listen(port, (err) => {
    if (err) return console.log(err);
    console.log('Server running on port: ', port);
});