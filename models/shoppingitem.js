const mongoose = require('mongoose');
const ShoppingItemSchema = mongoose.Schema({
    itemName: {
        type: String,
        required: true
    },
    itemQuantity: {
        type: Number,
        required: true
    },
    itemBought: {
        type: Boolean,
        required: true
    }
});

const item = module.exports = mongoose.model('item', ShoppingItemSchema);