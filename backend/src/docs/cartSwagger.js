/**
 * @swagger
 * tags:
 *   name: Panier
 *   description: Opérations liées au panier utilisateur
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     KitPanier:
 *       type: object
 *       properties:
 *         kit_id:
 *           type: integer
 *           description: ID du kit
 *         quantity:
 *           type: integer
 *           description: Quantité désirée
 *       required:
 *         - kit_id

 *     ValidationPanier:
 *       type: object
 *       properties:
 *         delivery_fee:
 *           type: number
 *           description: Frais de livraison
 */

/**
 * @swagger
 * /api/panier/ajouter:
 *   post:
 *     summary: Ajouter un kit au panier
 *     tags: [Panier]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/KitPanier'
 *     responses:
 *       200:
 *         description: Kit ajouté au panier
 *       400:
 *         description: Erreur liée au stock
 *       404:
 *         description: Kit introuvable
 *       500:
 *         description: Erreur serveur

 * /api/panier:
 *   get:
 *     summary: Voir son panier
 *     tags: [Panier]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Contenu du panier
 *       404:
 *         description: Panier introuvable
 *       500:
 *         description: Erreur serveur

 * /api/panier/modifier:
 *   put:
 *     summary: Modifier la quantité d’un kit
 *     tags: [Panier]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/KitPanier'
 *     responses:
 *       200:
 *         description: Quantité mise à jour
 *       404:
 *         description: Kit ou panier introuvable
 *       400:
 *         description: Stock insuffisant
 *       500:
 *         description: Erreur serveur

 * /api/panier/supprimer:
 *   delete:
 *     summary: Supprimer un kit du panier
 *     tags: [Panier]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [kit_id]
 *             properties:
 *               kit_id:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Kit supprimé du panier
 *       404:
 *         description: Panier introuvable
 *       500:
 *         description: Erreur serveur

 * /api/panier/vider:
 *   delete:
 *     summary: Vider complètement le panier
 *     tags: [Panier]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Panier vidé
 *       404:
 *         description: Panier introuvable
 *       500:
 *         description: Erreur serveur

 * /api/panier/valider:
 *   post:
 *     summary: Valider le panier et créer une commande
 *     tags: [Panier]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ValidationPanier'
 *     responses:
 *       201:
 *         description: Commande créée
 *       400:
 *         description: Panier vide
 *       500:
 *         description: Erreur serveur
 */

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */
