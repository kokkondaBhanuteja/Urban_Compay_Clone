const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    consumerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    providerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Provider' }, // Can be null until a provider is assigned
    serviceId: { type: mongoose.Schema.Types.ObjectId, ref: 'Service', required: true },
    
    // The address for the service is embedded here to keep a historical record
    // even if the user deletes the address from their profile later.
    serviceAddress: {
        addressLine1: { type: String, required: true },
        city: { type: String, required: true },
        pincode: { type: String, required: true },
        state: { type: String, required: true },
    },
    
    bookingStatus: {
        type: String,
        enum: ['requested', 'confirmed', 'assigned', 'in_progress', 'completed', 'cancelled_by_user', 'cancelled_by_provider'],
        default: 'requested',
        index: true
    },
    scheduledAt: { type: Date, required: true },
    startedAt: Date,
    completedAt: Date,
    
    totalPrice: { type: Number, required: true },
    specialInstructions: String,
    
    // A reference to the discount used, from the payment_service
    discountId: { type: mongoose.Schema.Types.ObjectId, ref: 'Discount' }
}, { timestamps: true });

// Indexing for efficient querying of a user's or provider's bookings
bookingSchema.index({ consumerId: 1 });
bookingSchema.index({ providerId: 1 });


const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
