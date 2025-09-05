const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to the User model in auth_service
        required: true
    },
    addressLine1: { type: String, required: true },
    addressLine2: String,
    city: { type: String, required: true },
    pincode: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true },
    addressType: { type: String, enum: ['home', 'work', 'other'], default: 'home' }
}, { timestamps: true });

addressSchema.index({ userId: 1 });

const Address = mongoose.model('Address', addressSchema);

module.exports = Address;