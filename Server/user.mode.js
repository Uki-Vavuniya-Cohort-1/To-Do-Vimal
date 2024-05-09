const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    Id: {
        type: String,
        required: true,
        unique: true
    },
    Name: {
        type: String,
        required: true,
    },
    Role: {
        type: String,
        required: true,
    },
    Created_Note: {
        type: String,

    }
})

const Document = mongoose.model("useRModel", schema);
module.exports = Document;