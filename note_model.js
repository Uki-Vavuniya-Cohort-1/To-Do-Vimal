const mongoose = require("mongoose")
const schema = new mongoose.Schema({
    Id: {
        type: String,
        require: true,
    },
    Title: {
        type: String,
        require: true
    },
    Created_By: {
        type: String,
        require: true,
    },
    Created_Date : {
        type: Date,
        require: true,
    },
    Content: {
        type: String,
        require: true,
    },
    Status: {
        type: String,
        require: true,
    },
    Deadline: {
        type: Date,
        require: true,
    }
});
const Document = mongoose.model("review", schema);
module.exports = Document;