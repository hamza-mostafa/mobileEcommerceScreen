const express = require('express');
const router = express.Router();
const controller = require('../../controllers/CoffeeMachineController')

// This would have been easier if added to only 1 route a optional params skuId,
// however for the sake of extensibility I kept it separate and also to maintain the Single responsibility

/**
 * @swagger
 *   tags:
 *    name: Coffee Machine
 *    description: Coffee Machine management
 */

/**
 * @swagger
 * path:
 *   /coffee-machines:
 *     get:
 *       tags: [Coffee Machine]
 *       summary: This should get all the coffee-machine.
 *       description: This should get all the coffee-machine.
 *       consumes:
 *         application/json
 *       parameters:
 *       - name: productType
 *         in: query
 *         type: string
 *         description: ex. ['espresso', 'small', 'large']
 *       - name: waterLineCompatible
 *         in: query
 *         type: Boolean Number
 *       - name: limit
 *         in: query
 *         type: Number
 *       - name: page
 *         in: query
 *         type: Number
 *       responses:
 *         200:
 *           description: Receive all the coffee machines.
 *           schema:
 *             $ref: '#/components/schemas/CoffeeMachine'
 *             test:
 *               type: string
 *         404:
 *           description: Not found!.
 *         400:
 *           description: Bad request!.
 *
 */
router.get("/", [controller.getAll]);

/**
 * @swagger
 * path:
 *   /coffee-machines/{skuId}:
 *     get:
 *       tags: [Coffee Machine]
 *       summary: This should get the specified coffee-machine.
 *       description: This should get the specified coffee-machine.
 *       consumes:
 *         application/json
 *       parameters:
 *       - name: skuId
 *         required: true
 *         in: path
 *         schema:
 *           type: String
 *       - name: productType
 *         in: query
 *         schema:
 *           type: String
 *       - name: waterLineCompatible
 *         in: query
 *         schema:
 *          type: Number
 *       responses:
 *         200:
 *           description: Received.
 *         404:
 *           description: Not found!.
 *         400:
 *           description: Bad request!.
 *
 */
router.get("/:skuId",[controller.getById]);

module.exports = router;
