var express = require('express');
var router = express.Router();
const Skills = require('../models/skills')

/* GET users listing. */
router.get('/', function(req, res) {
  res.render('ski/skills', {
    skills: Skills.getAll()
  });
});





module.exports = router;
