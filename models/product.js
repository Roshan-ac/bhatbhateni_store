const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    desc: { type: String, required: true },
    img: { type: String, required: true },
    price: { type: Number, required: true },
    size: { type: String, required: true },
},{timestamps:true});
mongoose.models = {}
export default mongoose.model('product', productSchema);
