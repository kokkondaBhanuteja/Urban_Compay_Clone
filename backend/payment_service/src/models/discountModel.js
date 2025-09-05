const mongoose = require('mongoose');

const discountSchema = new mongoose.Schema({
    promoCode: { type: String, required: true, unique: true, uppercase: true },
    description: String,
    discountPercentage: { type: Number, min: 0, max: 100 },
    validFrom: Date,
    validUntil: Date,
    isActive: { type: Boolean, default: true }
}, { timestamps: true });

const Discount = mongoose.model('Discount', discountSchema);

module.exports = Discount;
