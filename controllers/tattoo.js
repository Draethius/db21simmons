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

exports.tattoo_detail = async function(req, res) {
	console.log("detail" + req.params.id)
	try{
		result = await Tattoo.findById(req.params.id)
		res.send(result)
	}
	catch(error){
		res.status(500)
		res.send('{"error": document for id ${req.params.id} not found');
	}
};

exports.tattoo_create_post = async function(req, res) {
	console.log(req.body)
	let document = new Tattoo();
	document.tatNum = req.body.tatNum;
	document.tatColor = req.body.tatColor;
	document.tatLocation = req.body.tatLocation;
	try{
		let result = await document.save();
		res.send(result);
	}
	catch(err){
		res.status(500);
		res.send('{"error":${err}}');
	}
};

exports.tattoo_delete = function(req, res) {
    res.send('NOT IMPLEMENTED: Tattoo delete DELETE ' + req.params.id);
};

exports.tattoo_update_put = function(req, res) {
    res.send('NOT IMPLEMENTED: Tattoo update PUT' + req.params.id);
};

exports.tattoo_view_all_Page = async function(req, res) {
	try{
		theTattoos = await Tattoo.find();
		res.render('tattoo', { title: 'Tattoo Search Results', results: theTattoos});
	}
	catch(err){
		res.status(500);
		res.send('{"error":${err}}');
	}
};

