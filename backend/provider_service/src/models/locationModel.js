const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
    cityName: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true },
    isServiceable: { type: Boolean, default: true, index: true } // Indexed to find serviceable cities quickly
}, { timestamps: true });

// Ensures that you don't have duplicate cities
locationSchema.index({ cityName: 1, state: 1, country: 1 }, { unique: true });

const Location = mongoose.model('Location', locationSchema);

module.exports = Location;
