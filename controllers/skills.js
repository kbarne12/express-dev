const Skills = require('../models/skills')
module.exports = {
    skills,
    new: newSkill,
    create
}

function create(req, res){
    console.log(req.body.skill)
    res.redirect('/skills')
}

function newSkill(req, res) {
    res.render('ski/new')
}

function skills(req, res) {
    res.render('ski/skills', {
    skills: Skills.getAll()
    });
}