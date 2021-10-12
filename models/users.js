const { Schema, model } = require('mongoose');
const jwt = require('jsonwebtoken');


const userSchema = Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 100,
    },
    email: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 255,
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1024,
    },
    role: {
        type: String,
        enum: ["admin", "user"],
        default: 'user',
    }
})

userSchema.methods.generateJWT = function () {
    const token = jwt.sign({ _id: this._id, email: this.email, role: this.role }, process.env.mySecretKey);
    return token;
}

const User = model('User', userSchema);

exports.User = User;