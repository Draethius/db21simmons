var express = require('express');
const tattoo_controllers=require('../controllers/tattoo');
var router = express.Router();

const secured = (req, res, next) => {
	if(req.user){
		return next();
	}
	req.session.returnTo = req.originalUrl;
	res.redirect("/login");
}

/* GET home page. */
router.get('/', tattoo_controllers.tattoo_view_all_Page);

router.get('/detail',tattoo_controllers.tattoo_view_one_Page);

router.get('/create',tattoo_controllers.tattoo_create_Page);

router.get('/update',secured,tattoo_controllers.tattoo_update_Page);

router.get('/delete',tattoo_controllers.tattoo_delete_Page);

module.exports = router;
