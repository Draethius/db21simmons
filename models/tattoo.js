const mongoose = require("mongoose");
const tattooSchema = mongoose.Schema({
	tatNum: Number,
	tatColor: String,
	tatLocation: String
})

module.exports = mongoose.model("Tattoo", tattooSchema)
