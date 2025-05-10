// src/docs/reviewSwagger.js

/**
 * @swagger
 * tags:
 *   name: Reviews
 *   description: Gestion des avis utilisateurs
 */

/**
 * @swagger
 * /reviews:
 *   get:
 *     summary: Récupérer tous les avis (admin uniquement)
 *     tags: [Reviews]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Liste des avis
 *
 * /reviews/tutorial/{tutorial_id}:
 *   get:
 *     summary: Récupérer les avis d’un tutoriel
 *     tags: [Reviews]
 *     parameters:
 *       - in: path
 *         name: tutorial_id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Liste des avis pour le tutoriel donné
 *
 * /reviews:
 *   post:
 *     summary: Ajouter un avis
 *     tags: [Reviews]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - tutorial_id
 *               - rating
 *             properties:
 *               tutorial_id:
 *                 type: integer
 *               rating:
 *                 type: integer
 *               content:
 *                 type: string
 *     responses:
 *       201:
 *         description: Avis ajouté
 *
 * /reviews/{id}:
 *   delete:
 *     summary: Supprimer un avis (admin)
 *     tags: [Reviews]
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
 *         description: Avis supprimé
 *
 * /reviews/top/best:
 *   get:
 *     summary: Récupérer les meilleurs avis (note = 5)
 *     tags: [Reviews]
 *     responses:
 *       200:
 *         description: Liste des meilleurs avis
 */
