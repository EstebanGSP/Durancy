const express = require('express');
const router = express.Router();
const TutorialController = require('../controllers/TutorialsController');

router.get('/tutorials', TutorialController.getAllTutorials);
router.get('/tutorials/:id', TutorialController.getTutorialById);
router.post('/tutorials', TutorialController.createTutorial);
router.put('/tutorials/:id', TutorialController.updateTutorial);
router.delete('/tutorials/:id', TutorialController.deleteTutorial);

module.exports = router;
