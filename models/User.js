const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamps');
const Schema = mongoose.Schema;

const UserSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    bots:[{
        type: Schema.Types.ObjectId,
        ref: "Bot"
    }]
});

UserSchema.plugin(timestamps);

module.exports = mongoose.model('User', UserSchema);