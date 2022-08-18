const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    firstname: { type: String, required: true },
    profilepicture: { type: String, default: null },
    lastname: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    token: { type: String, unique: true }
})

mongoose.models = {}
export default mongoose.model('user', UserSchema);