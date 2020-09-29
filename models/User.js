const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create User schema
const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    dateOfBirth: {
        type: Date,
    },
    // TODO: Add gender, school, location
});

module.exports = User = mongoose.model("users", UserSchema);
