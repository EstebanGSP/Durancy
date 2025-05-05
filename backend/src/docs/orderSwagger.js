/**
 * @swagger
 * tags:
 *   name: Commandes
 *   description: Gestion des commandes utilisateur
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     KitCommande:
 *       type: object
 *       required:
 *         - kit_id
 *         - quantity
 *       properties:
 *         kit_id:
 *           type: integer
 *         quantity:
 *           type: integer
 *     CommandeInput:
 *       type: object
 *       required:
 *         - kits
 *       properties:
 *         kits:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/KitCommande'
 *         delivery_fee:
 *           type: number
 *           description: Frais de livraison
 */

/**
 * @swagger
 * /orders:
 *   post:
 *     summary: Créer une commande
 *     tags: [Commandes]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CommandeInput'
 *     responses:
 *       201:
 *         description: Commande créée avec succès
 *       400:
 *         description: Erreur dans les données de la commande
 *       500:
 *         description: Erreur serveur

 *   get:
 *     summary: Voir toutes les commandes (admin uniquement)
 *     tags: [Commandes]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Liste des commandes
 *       500:
 *         description: Erreur serveur

 * /orders/me:
 *   get:
 *     summary: Voir les commandes de l'utilisateur connecté
 *     tags: [Commandes]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Liste des commandes utilisateur
 *       500:
 *         description: Erreur serveur

 * /orders/{id}:
 *   get:
 *     summary: Voir une commande spécifique
 *     tags: [Commandes]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Commande trouvée
 *       403:
 *         description: Accès interdit
 *       404:
 *         description: Commande introuvable
 *       500:
 *         description: Erreur serveur

 *   delete:
 *     summary: Supprimer une commande (admin uniquement)
 *     tags: [Commandes]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Commande supprimée
 *       404:
 *         description: Commande introuvable
 *       500:
 *         description: Erreur serveur

 * /orders/{id}/cancel:
 *   patch:
 *     summary: Annuler une commande (admin uniquement)
 *     tags: [Commandes]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Commande annulée
 *       404:
 *         description: Commande introuvable
 *       500:
 *         description: Erreur serveur

 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */
