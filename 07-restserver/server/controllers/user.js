const express = require('express');
const User = require('../models/user');
const _ = require('underscore');
const app = express();

const bcrypt = require('bcrypt');

app.get('/users', function(req, res) {
    let from = req.query.from || 0;
    from = Number(from);

    let limit = req.query.limit || 5;
    limit = Number(limit);

    User.find({}, 'name email role status google img')
        .skip(from)
        .limit(limit)
        .exec()
        .then(users => {

            User.countDocuments({})
                .skip(from)
                .limit(limit)
                .then(length => {
                    return res.json({
                        ok: true,
                        users,
                        length
                    });
                });
        })
        .catch(err => {
            return res.json({
                ok: false,
                err
            })
        });
});

app.post('/user', function(req, res) {
    let body = req.body;
    let user = new User({
        name: body.name,
        email: body.email,
        password: bcrypt.hashSync(body.password, 10),
        role: body.role

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
                err
            });
        })
});

app.put('/user/:id', function(req, res) {
    let id = req.params.id;
    let body = _.pick(req.body, ['name', 'email', 'img', 'role', 'estado']);

    User.findByIdAndUpdate(id, body, { new: true, runValidators: true }, (err, userDB) => {
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

app.delete('/user/:id', function(req, res) {
    let id = req.params.id;

    User.findByIdAndRemove(id, (err, deletedUser) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }

        if (!deletedUser) {
            res.status(404).json({
                ok: false,
                error: {
                    msg: "User not found"
                }
            })
        }

        res.json({
            ok: true,
            user: deletedUser
        })
    });
});

module.exports = app;