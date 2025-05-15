/**
 * @swagger
 * tags:
 *   name: Orders
 *   description: Gestion des commandes
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Order:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         user_id:
 *           type: integer
 *         total:
 *           type: number
 *         delivery_fee:
 *           type: number
 *         date_order:
 *           type: string
 *           format: date
 *         status:
 *           type: string
 *           enum: [payé, préparation, expédiée, livrée, annulée]
 */

/**
 * @swagger
 * /orders:
 *   post:
 *     summary: Créer une commande
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               kits:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     kit_id:
 *                       type: integer
 *                     quantity:
 *                       type: integer
 *               delivery_fee:
 *                 type: number
 *     responses:
 *       201:
 *         description: Commande créée avec succès
 *       400:
 *         description: Données manquantes
 *       500:
 *         description: Erreur serveur

 *   get:
 *     summary: Voir toutes les commandes (admin)
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Liste des commandes
 *       500:
 *         description: Erreur serveur

 * /orders/me:
 *   get:
 *     summary: Voir les commandes du client connecté
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: status
 *         schema:
 *           type: string
 *         description: Filtrer par statut
 *     responses:
 *       200:
 *         description: Commandes récupérées
 *       500:
 *         description: Erreur serveur

 * /orders/{id}:
 *   get:
 *     summary: Voir une commande par ID (sécurisé)
 *     tags: [Orders]
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
 *         description: Commande récupérée
 *       403:
 *         description: Accès interdit
 *       404:
 *         description: Commande introuvable

 *   delete:
 *     summary: Supprimer une commande (admin)
 *     tags: [Orders]
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

 * /orders/{id}/cancel:
 *   patch:
 *     summary: Annuler une commande (admin)
 *     tags: [Orders]
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

 * /orders/{id}/status:
 *   patch:
 *     summary: Mettre à jour le statut (admin)
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *                 enum: [payé, préparation, expédiée, livrée, annulée]
 *     responses:
 *       200:
 *         description: Statut mis à jour
 *       400:
 *         description: Statut invalide
 *       404:
 *         description: Commande introuvable

 * /orders/{id}/confirm-delivery:
 *   patch:
 *     summary: Confirmer la livraison (client)
 *     tags: [Orders]
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
 *         description: Livraison confirmée
 *       403:
 *         description: Accès refusé
 *       400:
 *         description: Statut non valide pour confirmation
 *       404:
 *         description: Commande introuvable

 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */
