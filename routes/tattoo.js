var express = require('express');
const tattoo_controllers=require('../controllers/tattoo');
var router = express.Router();


/* GET home page. */
router.get('/', tattoo_controllers.tattoo_view_all_Page);

router.get('/detail',tattoo_controllers.tattoo_view_one_Page);

router.get('/create',tattoo_controllers.tattoo_create_Page);

module.exports = router;
