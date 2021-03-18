var express = require('express');
var router = express.Router();
const skillsCtrl = require('../controllers/skills')

/* GET users listing. */
router.get('/', skillsCtrl.skills);





module.exports = router;
