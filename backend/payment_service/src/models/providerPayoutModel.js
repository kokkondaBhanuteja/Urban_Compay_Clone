const mongoose = require('mongoose');

const providerPayoutSchema = new mongoose.Schema({
    providerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Provider', required: true },
    amount: { type: Number, required: true },
    status: { type: String, enum: ['pending', 'processed', 'failed'], default: 'pending', index: true },
    processedAt: Date,
    requestedAt: { type: Date, default: Date.now }
}, { timestamps: true });

// Indexing to easily query payouts for a provider
providerPayoutSchema.index({ providerId: 1 });

const ProviderPayout = mongoose.model('ProviderPayout', providerPayoutSchema);

module.exports = ProviderPayout;
