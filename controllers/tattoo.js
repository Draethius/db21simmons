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

exports.tattoo_delete = async function(req, res) {
	console.log("delete " + req.params.id)
	try{
		result= await Tattoo.findByIdAndDelete(req.params.id)
		console.log("Removed " + result)
		res.send(result)
	}
	catch(err){
		res.status(500)
		res.send('{"error": Error deleting ${err}}');
	}
};

exports.tattoo_update_put = async function(req,res){
	    console.log('update on id ${req.params.id} with body ${JSON.stringify(req.body)}')
	    try{
		    let toUpdate = await Tattoo.findById(req.params.id)
		    if(req.body.tatNum) toUpdate.tatNum = req.body.tatNum;
		    if(req.body.tatColor) toUpdate.tatColor = req.body.tatColor;
		    if(req.body.tatLocation) toUpdate.tatLocation = req.body.tatLocation;
		    let result = await toUpdate.save();
		    console.log("Success " + result)
		    res.send(result)
	    }
	    catch(err){
		    res.status(500)
		    res.send('{"error": ${err}: Update for id ${req.params.id} failed');
	    }
	    
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

exports.tattoo_view_one_Page = async function(req,res){
	console.log("single view for id " + req.query.id)
	try{
		result = await Tattoo.findById(req.query.id)
		res.render('tattoodetail',
			{ title: 'Tattoo Detail',toShow:result });
	}
	catch(err){
		res.status(500)
		res.send(`{'error': '${err}'}`);
	}
};

exports.tattoo_create_Page = function(req,res){
	console.log("create view")
	try{
		res.render('tattoocreate', {title: 'Tattoo Create'});
	}
	catch(err){
		res.status(500)
		res.send(`{'error': '${err}'}`);
	}
};

exports.tattoo_update_Page = async function(req,res){
	console.log("update view for item " + req.query.id)
	try{
		let result = await Tattoo.findById(req.query.id)
		res.render('tattooupdate', { title: 'Tattoo Update', toShow: result});
	}
	catch(err){
		res.status(500)
		res.send(`{'error': '${err}'}`);
	}
};

exports.tattoo_delete_Page = async function(req,res) {
	console.log("Delete view for id " + req.query.id)
	try{
		result = await Tattoo.findById(req.query.id)
		res.render('tattoodelete',{ title: 'Tattoo Delete', toShow: result});
	}
	catch(err){
		res.status(500)
		res.send(`{'error': '${err}'}`);
	}
};
