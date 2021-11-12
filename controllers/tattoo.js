var Tattoo = require('../models/tattoo');

exports.tattoo_list = async function(req,res){
	try{
		theTattoos = await Tattoo.find();
		res.send(theTattoos);
	}
	catch(err){
		res.status(500);
		res.send('{"error":${err}}');
	}
};

exports.tattoo_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Tattoo detail: ' + req.params.id);
};

exports.tattoo_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Tattoo create POST');
};

exports.tattoo_delete = function(req, res) {
    res.send('NOT IMPLEMENTED: Tattoo delete DELETE ' + req.params.id);
};

exports.tattoo_update_put = function(req, res) {
    res.send('NOT IMPLEMENTED: Tattoo update PUT' + req.params.id);
};

