const User = require('../models/User');

const UserController = {

  // Créer un utilisateur
  async createUser(req, res) {
    try {
      const { username, firstname, lastname, email, password, role, address, profile_pic } = req.body;

      const newUser = await User.create({
        username,
        firstname,
        lastname,
        email,
        password,
        role,
        address,
        profile_pic
      });

      res.status(201).json(newUser);
    } catch (error) {
      console.error('Erreur création utilisateur :', error);
      res.status(500).json({ message: "Erreur lors de la création de l'utilisateur." });
    }
  },

  // Récupérer tous les utilisateurs
  async getAllUsers(req, res) {
    try {
      const users = await User.findAll();
      res.status(200).json(users);
    } catch (error) {
      console.error('Erreur récupération utilisateurs :', error);
      res.status(500).json({ message: "Erreur lors de la récupération des utilisateurs." });
    }
  },

  // Modifier les infos d’un utilisateur
  async updateUser(req, res) {
    try {
      const userId = req.params.id;
      const updatedData = req.body;

      const user = await User.findByPk(userId);

      if (!user) {
        return res.status(404).json({ message: "Utilisateur non trouvé." });
      }

      await user.update(updatedData);

      res.status(200).json({ message: "Utilisateur mis à jour avec succès.", user });
    } catch (error) {
      console.error("Erreur mise à jour utilisateur :", error);
      res.status(500).json({ message: "Erreur lors de la mise à jour de l'utilisateur." });
    }
  }

};

module.exports = UserController;
