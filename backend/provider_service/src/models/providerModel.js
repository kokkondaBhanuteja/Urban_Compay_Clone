const mongoose = require('mongoose');

// This schema defines the availability slots for a provider
const availabilitySchema = new mongoose.Schema({
    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true },
    isUnavailable: { type: Boolean, default: false } // To block off time
});

const providerSchema = new mongoose.Schema({
    // This links the provider profile to the core user account in the auth_service
    userId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true, 
        unique: true 
    },
    bio: { type: String },
    averageRating: { type: Number, default: 0 },
    isVerified: { type: Boolean, default: false },
    isActive: { type: Boolean, default: true, index: true }, // Indexed for quick lookups of active providers
    onboardingDate: { type: Date, default: Date.now },
    
    // An array of Service ObjectIds from the catalog_service
    servicesOffered: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Service' }],

    // An array of Location ObjectIds where the provider operates
    serviceableLocations: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Location' }],
    
    // The provider's schedule
    availability: [availabilitySchema]
}, { timestamps: true });


const Provider = mongoose.model('Provider', providerSchema);

module.exports = Provider;
