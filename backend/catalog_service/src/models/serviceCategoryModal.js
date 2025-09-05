const mongoose = require('mongoose');

const serviceCategorySchema = new mongoose.Schema({
    categoryName: { type: String, required: true, unique: true },
    description: String,
    iconUrl: String,
    isActive: { type: Boolean, default: true }
}, { timestamps: true });

const ServiceCategory = mongoose.model('ServiceCategory', serviceCategorySchema);

module.exports = ServiceCategory;
