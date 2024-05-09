const mongoose = require("mongoose")
const schema = new mongoose.Schema({
    Id: {
        type: String,
        require: true
    },
    Title: {
        type: String
    },
    Created_By: {
        // type: mongoose.Schema.Types.ObjectId,
        // ref: 'User',
        type: String
    },
    Created_Date : {
        type: Date
    },
    Content: {
        type: String
    },
    Status: {
        type: String
    },
    Deadline: {
        type: Date
    }
});
const Document = mongoose.model("review", schema);
module.exports = Document;