const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String
    },
    User : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "users",
        required : true
    },
    date: {
        type: Date,
        default: Date.now
    }
},
{
    timestamps: true
});

module.exports =mongoose.model("users", UserSchema) ;