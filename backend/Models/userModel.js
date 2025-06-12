const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    pic: {type: String, required: true, default: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"},
    bio: {type: String, required: true, default: "Hello, I am a user of this app"},
},
{
    timestamps: true,
}
)

const User = mongoose.model("User", UserSchema);
module.exports = User;