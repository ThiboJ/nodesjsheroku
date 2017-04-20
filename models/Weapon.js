const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamps');
const Schema = mongoose.Schema;

const WeaponSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    damage:{
        type: Number,
        required: true
    },
    bot: {
        type: Schema.Types.ObjectId,
        ref: "Bot"
    }
});

WeaponSchema.plugin(timestamps);

module.exports = mongoose.model('Weapon', WeaponSchema);