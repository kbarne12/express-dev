const skills = [
    {skill: 'CSS', have: true},
    {skill: 'JavaScript', have: true},
    {skill: 'HTML5', have: true},
    {skill: 'Node.js', have: false}

]

module.exports = { 
    getAll,
    getOne,
    create,
    delete: deleteOne
};
function deleteOne(id) {
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
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