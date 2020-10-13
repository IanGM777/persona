const Persona = require('../models/persona');
const personaController = {}

personaController.getPersona = async (req, res) => {
    const personas = await Persona.find();
    res.json(personas);
}

personaController.createPersona = async (req, res) => {
    const persona = new Persona(req.body);
    await persona.save();
    res.json({
        'status': 'Persona Saved'
    });
}

personaController.getPersonaById = async (req, res) => {
    const persona = await Persona.findById(req.params.id);
    res.json(persona);
}

personaController.updatePersona = async (req, res) => {
    const { id } = req.params;
    const persona = {
        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        cargo: req.body.cargo,
        ciudad: req.body.ciudad,
        salario: req.body.salario
    };
    await Persona.findOneAndUpdate(id, {$set: persona}, {new: true});
    res.json({status: 'Persona Updated'});
}

personaController.deletePersona = async (req, res) => {
    await Persona.findByIdAndRemove(req.params.id);
    res.json({status: 'Persona Deleted'});
}

module.exports = personaController;