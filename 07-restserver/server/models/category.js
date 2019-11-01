const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let categorySchema = new Schema({
    description: {
        type: String,
        required: [true, 'The name is mandatory']
    },
    user: { type: Schema.Types.ObjectId, ref: 'User' }

});


module.exports = mongoose.model('Category', categorySchema);