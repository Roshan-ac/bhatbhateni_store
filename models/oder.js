const mongoose = require('mongoose')

const oderSchema = new mongoose.Schema({
    userId: { type: String, required: true, unique: true },
    Items: { type: String, required: true },
    address: { type: String, required: true },
    phonenumber: { type: String, required: true },
    email: { type: String, required: true },
    totalCost: { type: String, required: true }
}, { timestamps: true });
mongoose.models = {}
export default mongoose.model('oder', oderSchema);