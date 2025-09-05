const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    bookingId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Booking', 
        required: true, 
        unique: true 
    },
    consumerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    providerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Provider', required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    comment: String
}, { timestamps: true });

// Indexing to quickly fetch all reviews for a specific provider
reviewSchema.index({ providerId: 1 });

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
