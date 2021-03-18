const Skills = require('../models/skills')
module.exports = {
    skills,

}

function skills(req, res) {
    res.render('ski/skills', {
    skills: Skills.getAll()
    });
}