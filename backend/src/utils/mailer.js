const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL_USER, // adresse Gmail
    pass: process.env.MAIL_PASS  // le mot de passe d'application généré
  }
});

/**
 * Envoie un email simple
 * @param {string} to - Adresse de destination
 * @param {string} subject - Sujet de l’email
 * @param {string} text - Contenu texte
 */
const sendMail = async (to, subject, text) => {
  await transporter.sendMail({
    from: `"Durancy" <${process.env.MAIL_USER}>`,
    to,
    subject,
    text
  });
};

module.exports = sendMail;
