const Skills = require('../models/skills')
module.exports = {
    skills,
    new: newSkill,
    create,
    show,
    delete: deleteSkill
    
    
}

function deleteSkill(req, res){
    Skills.deleteOne(req.params.id)
    res.redirect('/skills')
}

function show(req, res) {
    res.render('ski/show', {
        skill: Skills.getOne(req.params.id)
    })
}

function create(req, res){
    Skills.create(req.body);
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