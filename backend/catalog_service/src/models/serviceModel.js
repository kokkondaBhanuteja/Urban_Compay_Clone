const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    category: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'ServiceCategory', 
        required: true 
    },
    serviceName: { type: String, required: true },
    description: String,
    basePrice: { type: Number, required: true },
    priceUnit: { 
        type: String, 
        enum: ['fixed', 'hourly', 'per_item'], 
        required: true 
    },
    // Estimated time in minutes to complete the service
    durationMinutes: Number, 
    isActive: { type: Boolean, default: true }
}, { timestamps: true });

// Indexing for faster lookups by category
serviceSchema.index({ category: 1 });

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;
