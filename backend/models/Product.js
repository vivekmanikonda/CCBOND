const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({

})
const ProductModel = mongoose.model("Product",ProductSchema);
module.exports = ProductModel;