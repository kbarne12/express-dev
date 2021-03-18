var express = require('express');
var router = express.Router();
const skillsCtrl = require('../controllers/skills')

/* GET users listing. */
router.get('/', skillsCtrl.skills);
router.get('/new', skillsCtrl.new);
router.post('/', skillsCtrl.create)





module.exports = router;
