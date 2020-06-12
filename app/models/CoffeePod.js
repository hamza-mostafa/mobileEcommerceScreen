//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

/**
 * @swagger
 * components:
 *   schemas:
 *     CoffeePod:
 *       type: object
 *       required:
 *       - productType
 *       - skuId
 *       - flavor
 *       - packSize
 *       properties:
 *         productType:
 *           type: String
 *         skuId:
 *           type: String
 *           required: true
 *           description: please make sure the pattern AA111 is maintained, for ex. CP007
 *         flavor:
 *           type: String,
 *           enum: ['vanilla', 'carmel', 'psl', 'mocha', 'hazelnut']
 *           description: boolean by Integers.
 *         packSize:
 *           type: Number,
 *           description: should be added by DOZENS.
 *       example:
 *         productType: large
 *         skuId: 75b35882-bac0-4988-8fae-19b3ccb90c68
 *         packSize: 1
 *         flavor: carmel
 */

var coffeePodSchema = new Schema({
    skuId: {
        type: String,
        required: [true, 'please provide the sku id'],
        match: /^[A-Z]{2}[0-9]{3}$/i,
        unique: true,
        sparse: true
    },
    productType: {
        type: String,
        enum: ['large', 'small', 'espresso'],
        required: [true,'please provide the type, ex: large, small, espresso']
    },
    flavor: {
        type: String,
        enum: ['vanilla', 'carmel', 'psl', 'mocha', 'hazelnut'],
        required: [true, 'please provide the type, ex: vanilla, carmel, psl, mocha, hazelnut']
    },
    // as I understood out of this taks, that this is a bundle to be sold with the coffee pod
    packSize: {
        type: Number,
        required: [true,'please provide the pack size in this specific SKU']
    },
    availableQuantity:{
        type: Number,
    }
}, {timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }});

module.exports = mongoose.model("CoffeePod", coffeePodSchema);
