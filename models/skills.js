const skills = [
    {id: 100, skill: 'CSS', have: true},
    {id: 101,skill: 'JavaScript', have: true},
    {id: 102,skill: 'HTML5', have: true},
    {id: 103,skill: 'Node.js', have: false}

]

module.exports = { 
    getAll,
    getOne,
    create,
    deleteOne,
    deleteSkill
}

function getOne(id) {
    return skills.find(skill => skill.id === parseInt(id))
}

function deleteOne(id) {
    let idx = skills.findIndex(skill => skill.id === parseInt(id));
    skills.splice(idx, 1);
}

function deleteSkill(req, res) {
    skill.deleteOne(req.params.id);
    res.redirect('/skills');
}

function create(skill){
    skill.have = false
    skills.push(skill)
}

function getAll() {
    return skills
    }