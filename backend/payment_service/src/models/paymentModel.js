const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    bookingId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Booking', 
        required: true, 
        unique: true 
    },
    amount: { type: Number, required: true },
    paymentMethod: { type: String, enum: ['credit_card', 'upi', 'net_banking', 'cod'] },
    paymentStatus: { type: String, enum: ['pending', 'successful', 'failed'], default: 'pending', index: true },
    transactionId: { type: String, unique: true, sparse: true } // Some payments might not have a transaction ID initially
}, { timestamps: true });

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;
