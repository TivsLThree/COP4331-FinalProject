const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema:
const ImageSchema = new Schema({
    stringData: {type: String, required: true},
    owner: {type: String, required: true},
});

module.exports = Image = mongoose.model('image', ImageSchema);