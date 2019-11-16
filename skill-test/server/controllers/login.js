const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/user');

const app = express();

app.post('/login', (req, res) => {
    let body = req.body;

    User.findOne({ username: body.username }, (err, userDB) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }

        if (!userDB) {
            return res.status(404).json({
                ok: false,
                err: {
                    msg: "Incorrect username or password"
                }
            });
        }

        if (!bcrypt.compareSync(body.password, userDB.password)) {
            return res.status(404).json({
                ok: false,
                err: {
                    msg: "Incorrect username or password"
                }
            });
        }

        let token = jwt.sign({
            user: userDB
        }, process.env.SEED, { expiresIn: process.env.TOKEN_CADUCITY });

        res.json({
            ok: true,
            user: userDB,
            token
        })

    });
});



module.exports = app;