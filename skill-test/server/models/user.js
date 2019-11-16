const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let Schema = mongoose.Schema;

let userSchema = new Schema({
    name: {
        type: String,
        required: false
    },
    username: {
        type: String,
        unique: true,
        required: [true, "The username is mandatory."]
    },
    password: {
        type: String,
        required: [true, "The password is mandatory."]
    }
});

userSchema.methods.toJSON = function() {
    let user = this;
    let userObject = user.toObject();
    delete userObject.password;

    return userObject;
}

userSchema.plugin(uniqueValidator, { message: 'should be unique.' });

module.exports = mongoose.model('User', userSchema);