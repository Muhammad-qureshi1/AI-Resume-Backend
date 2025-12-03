const mongoose = require('mongoose');

const {Schema} = mongoose;

const userSchema = new Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        unique: true,
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
});

const SchemaUser = mongoose.model("newUser", userSchema);
module.exports = SchemaUser;