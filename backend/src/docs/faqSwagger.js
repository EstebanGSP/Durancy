/**
 * @swagger
 * tags:
 *   name: FAQ
 *   description: Gestion des questions fréquentes (FAQ)
 */

/**
 * @swagger
 * /faq:
 *   get:
 *     summary: Récupérer toutes les questions/réponses de la FAQ
 *     tags: [FAQ]
 *     responses:
 *       200:
 *         description: Liste des FAQs
 *
 *   post:
 *     summary: Ajouter une nouvelle question (admin)
 *     tags: [FAQ]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - question
 *             properties:
 *               question:
 *                 type: string
 *               answer:
 *                 type: string
 *     responses:
 *       201:
 *         description: FAQ créée
 *
 * /faq/{id}:
 *   put:
 *     summary: Modifier une réponse existante (admin)
 *     tags: [FAQ]
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
 *               answer:
 *                 type: string
 *     responses:
 *       200:
 *         description: Réponse mise à jour
 *
 *   delete:
 *     summary: Supprimer une question (admin)
 *     tags: [FAQ]
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
 *         description: FAQ supprimée
 */
