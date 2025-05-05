/**
 * @swagger
 * tags:
 *   name: Kits
 *   description: Gestion des kits
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Kit:
 *       type: object
 *       required:
 *         - name
 *         - description
 *         - price
 *       properties:
 *         id:
 *           type: integer
 *         name:
 *           type: string
 *         description:
 *           type: string
 *         price:
 *           type: number
 */

/**
 * @swagger
 * /kits:
 *   post:
 *     summary: Créer un nouveau kit
 *     tags: [Kits]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Kit'
 *     responses:
 *       201:
 *         description: Kit créé avec succès
 *       400:
 *         description: Données manquantes
 *       500:
 *         description: Erreur serveur

 *   get:
 *     summary: Récupérer tous les kits
 *     tags: [Kits]
 *     responses:
 *       200:
 *         description: Liste des kits
 *       500:
 *         description: Erreur serveur

 * /kits/{id}:
 *   get:
 *     summary: Récupérer un kit par ID
 *     tags: [Kits]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID du kit
 *     responses:
 *       200:
 *         description: Kit trouvé
 *       404:
 *         description: Kit non trouvé
 *       500:
 *         description: Erreur serveur

 *   put:
 *     summary: Mettre à jour un kit
 *     tags: [Kits]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID du kit
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *     responses:
 *       200:
 *         description: Kit mis à jour
 *       404:
 *         description: Kit non trouvé
 *       500:
 *         description: Erreur serveur

 *   delete:
 *     summary: Supprimer un kit
 *     tags: [Kits]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID du kit
 *     responses:
 *       200:
 *         description: Kit supprimé
 *       404:
 *         description: Kit non trouvé
 *       500:
 *         description: Erreur serveur

 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */
