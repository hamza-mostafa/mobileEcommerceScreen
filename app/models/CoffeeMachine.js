//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

/**
 * @swagger
 * components:
 *   schemas:
 *     CoffeeMachine:
 *       type: object
 *       required:
 *       - productType
 *       - waterLineCompatible
 *       - skuId
 *       properties:
 *         productType:
 *           type: String
 *           enum:
 *           - 'large'
 *           - 'small'
 *           - 'espresso'
 *         skuId:
 *           type: String
 *           required: true
 *           description: please make sure the pattern AA111 is maintained, for ex. CP007
 *         waterLineCompatible:
 *           type: Integer
 *           enum:
 *           - 1
 *           - 0
 *           default: 0
 *           description: boolean by Integers.
 *         _id:
 *           type: String
 *           default: 0
 *           description: item id.
 *         availableQuantity:
 *           type: Number
 *           description: item quantity available.
 *       example:
 *         productType: large
 *         skuId: CP007
 *         waterLineCompatible: 1
 *         _id: 5ee3670119e40343491b2cc1
 *         availableQuantity: 10
 *         model: deluxe
 */

var coffeeMachineSchema = new Schema({
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
        required: true
    },
    waterLineCompatible: {
        type: Number,
        default: 0,
        required: true
    },
    availableQuantity:{
        type: Number,
        default: 0
    },
    model:{
        type: String,
    }

}, {timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }});

module.exports = mongoose.model("CoffeeMachine", coffeeMachineSchema);;
