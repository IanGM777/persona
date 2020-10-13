const express = require('express');
const router = express.Router();
const personaController = require('../controllers/persona.controller');

router.get('/', personaController.getPersona);
router.post('/', personaController.createPersona);
router.get('/:id', personaController.getPersonaById);
router.put('/:id', personaController.updatePersona);
router.delete('/:id', personaController.deletePersona);

module.exports = router;