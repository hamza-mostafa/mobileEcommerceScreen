var express = require('express');
var router = express.Router();

var controller = require('../../controllers/CoffeePodController')

/**
 * @swagger
 *   tags:
 *    name: Coffee Pod
 *    description: Coffee Pod management
 */

/**
 * @swagger
 * path:
 *   /coffee-pods:
 *     get:
 *       tags: [Coffee Pod]
 *       summary: This should get all the coffee-pod.
 *       description: This should get all the coffee-pod.
 *       parameters:
 *       - name: productType
 *         in: query
 *         type: string
 *         description: ex. ['espresso', 'small', 'large']
 *       - name: flavor
 *         in: query
 *         type: String
 *         description: ex. ['vanilla', 'carmel', 'psl', 'mocha', 'hazelnut']
 *       - name: packSize
 *         in: query
 *         type: Number
 *         description: should be added by DOZENS.
 *       - name: limit
 *         in: query
 *         type: Number
 *       - name: page
 *         in: query
 *         type: Number
 *       consumes:
 *         application/json
 *       responses:
 *         200:
 *           description: Receive back flavor and flavor Id.
 *         404:
 *           description: Not found!.
 *         400:
 *           description: Bad request!.
 *
 */
router.route("/").get(controller.getAll);

/**
 * @swagger
 * path:
 *   /coffee-pods/{skuId}:
 *     get:
 *       tags: [Coffee Pod]
 *       summary: This should get the specified coffee-pod.
 *       description: This should get the specified coffee-pod.
 *       consumes:
 *         application/json
 *       parameters:
 *       - name: skuId
 *         required: true
 *         in: path
 *         type: string
 *       responses:
 *         200:
 *           description: Received.
 *         404:
 *           description: Not found!.
 *         400:
 *           description: Bad request!.
 *
 */
router.get("/:_id", [controller.getById]);

module.exports = router;
