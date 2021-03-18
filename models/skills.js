const skills = [
    {skill: 'CSS', have: true},
    {skill: 'JavaScript', have: true},
    {skill: 'HTML5', have: true},
    {skill: 'Node.js', have: false}

]

module.exports = { 
    getAll,
};

function getAll() {
    return skills
    }