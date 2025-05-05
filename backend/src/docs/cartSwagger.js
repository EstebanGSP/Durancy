/**
 * @swagger
 * tags:
 *   name: Cart
 *   description: CRUD operations for managing addresses
 */



/**
 * @swagger
 * components:
 *   schemas:
 *     Cart:
 *       type: object
 *       required:
 *         - id
 *         - streetAddress
 *       properties:
 *         id:
 *           type: integer
 *           description: The unique identifier of the address
 *         streetAddress:
 *           type: string
 *           description: The street address
 *         city:
 *           type: string
 *           description: The city of the address
 *         postalCode:
 *           type: string
 *           description: The postal code of the address
 *         country:
 *           type: string
 *           description: The country of the address
 */

/**
 * @swagger
 * /cart:
 *   post:
 *     summary: Create a new address
 *     tags: [Cart]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Cart'
 *     responses:
 *       201:
 *         description: Address created successfully
 *       401:
 *         description: Address already exists
 *       500:
 *         description: Internal server error
 */
