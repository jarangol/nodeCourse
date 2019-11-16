const express = require('express');
const bcrypt = require('bcrypt');
const _ = require('underscore');

const User = require('../models/user');
const { verifyToken } = require('../middlewares/authentication');
const app = express();


app.post('/user', verifyToken, function(req, res) {
    let body = req.body;
    if (!body) {
        return res.status(500).json({
            ok: false,
            err: 'No body present.'
        });
    }
    let user = new User({
        name: body.name,
        username: body.username,
        password: bcrypt.hashSync(body.password, 10),
    });

    user.save()
        .then(userDB => {
            res.json({
                ok: true,
                user: userDB
            });
        }).catch(err => {
            return res.status(400).json({
                ok: false,
                err: err.message
            });
        })
});

app.put('/user/:id', verifyToken, (req, res) => {
    let id = req.params.id;
    let body = _.pick(req.body, ['name']);
    User.findByIdAndUpdate(id, body, { new: true, runValidators: true }, (err, userDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        res.json({
            ok: true,
            user: userDB
        });
    });


});

app.delete('/user/:id', verifyToken, (req, res) => {
    let id = req.params.id;
    User.findByIdAndDelete(id, (err, userDB) => {
        if (err) {
            res.status(400).json({
                ok: false,
                err
            });
        }
        res.json({
            ok: true,
            user: userDB
        });
    });
});

module.exports = app;