/**
 * @swagger
 * tags:
 *   name: Tutorials
 *   description: Gestion des tutoriels liés aux kits
 */

/**
 * @swagger
 * /tutorials:
 *   post:
 *     summary: Créer un tutoriel
 *     tags: [Tutorials]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               video_url:
 *                 type: string
 *               description:
 *                 type: string
 *               kit_id:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Tutoriel créé
 *       400:
 *         description: Données manquantes
 *       500:
 *         description: Erreur serveur
 */

/**
 * @swagger
 * /tutorials:
 *   get:
 *     summary: Récupérer tous les tutoriels
 *     tags: [Tutorials]
 *     responses:
 *       200:
 *         description: Liste des tutoriels
 *       500:
 *         description: Erreur serveur
 */

/**
 * @swagger
 * /tutorials/kit/{kitId}:
 *   get:
 *     summary: Récupérer un tutoriel par l’ID du kit
 *     tags: [Tutorials]
 *     parameters:
 *       - in: path
 *         name: kitId
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID du kit
 *     responses:
 *       200:
 *         description: Tutoriel trouvé
 *       404:
 *         description: Tutoriel non trouvé
 *       500:
 *         description: Erreur serveur
 */

/**
 * @swagger
 * /tutorials/{id}:
 *   put:
 *     summary: Modifier un tutoriel
 *     tags: [Tutorials]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID du tutoriel
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               video_url:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Tutoriel mis à jour
 *       404:
 *         description: Tutoriel non trouvé
 *       500:
 *         description: Erreur serveur
 */

/**
 * @swagger
 * /tutorials/{id}:
 *   delete:
 *     summary: Supprimer un tutoriel
 *     tags: [Tutorials]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID du tutoriel
 *     responses:
 *       200:
 *         description: Tutoriel supprimé
 *       404:
 *         description: Tutoriel non trouvé
 *       500:
 *         description: Erreur serveur
 */
