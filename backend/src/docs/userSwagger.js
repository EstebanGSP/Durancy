/**
 * @swagger
 * tags:
 *   name: Utilisateurs
 *   description: Gestion des comptes utilisateur
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     UserRegister:
 *       type: object
 *       required:
 *         - username
 *         - email
 *         - password
 *         - role
 *       properties:
 *         username:
 *           type: string
 *         email:
 *           type: string
 *         password:
 *           type: string
 *         role:
 *           type: string
 *           enum: [client, partenaire, admin]
 *         firstname:
 *           type: string
 *         lastname:
 *           type: string
 *         address:
 *           type: string
 *         latitude:
 *           type: number
 *         longitude:
 *           type: number

 *     UserLogin:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *         password:
 *           type: string
 */

/**
 * @swagger
 * /users/register:
 *   post:
 *     summary: Inscription utilisateur
 *     tags: [Utilisateurs]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserRegister'
 *     responses:
 *       201:
 *         description: Utilisateur inscrit avec succès
 *       400:
 *         description: Données invalides
 *       500:
 *         description: Erreur serveur

 * /users/login:
 *   post:
 *     summary: Connexion utilisateur
 *     tags: [Utilisateurs]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserLogin'
 *     responses:
 *       200:
 *         description: Connexion réussie
 *       401:
 *         description: Identifiants incorrects
 *       500:
 *         description: Erreur serveur

 * /users/me:
 *   get:
 *     summary: Récupérer les infos de l'utilisateur connecté
 *     tags: [Utilisateurs]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Informations utilisateur
 *       404:
 *         description: Utilisateur non trouvé

 *   put:
 *     summary: Mettre à jour les infos de l'utilisateur connecté
 *     tags: [Utilisateurs]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstname:
 *                 type: string
 *               lastname:
 *                 type: string
 *               password:
 *                 type: string
 *               profile_pic:
 *                 type: string
 *     responses:
 *       200:
 *         description: Compte mis à jour
 *       404:
 *         description: Utilisateur non trouvé

 *   delete:
 *     summary: Supprimer son propre compte
 *     tags: [Utilisateurs]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Compte supprimé
 *       404:
 *         description: Utilisateur non trouvé

 * /users:
 *   get:
 *     summary: Récupérer tous les utilisateurs (admin uniquement)
 *     tags: [Utilisateurs]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Liste des utilisateurs
 *       500:
 *         description: Erreur serveur

 * /users/{id}:
 *   put:
 *     summary: Mettre à jour un utilisateur (admin ou propriétaire)
 *     tags: [Utilisateurs]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstname:
 *                 type: string
 *               lastname:
 *                 type: string
 *               password:
 *                 type: string
 *               profile_pic:
 *                 type: string
 *     responses:
 *       200:
 *         description: Utilisateur mis à jour
 *       403:
 *         description: Modification non autorisée
 *       404:
 *         description: Utilisateur non trouvé

 *   delete:
 *     summary: Supprimer un utilisateur (admin ou propriétaire)
 *     tags: [Utilisateurs]
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
 *         description: Compte supprimé
 *       403:
 *         description: Suppression non autorisée
 *       404:
 *         description: Utilisateur non trouvé

 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */
