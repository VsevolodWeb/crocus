const {Schema, model} = require('mongoose');

const schema = new Schema({
	key: {type: Number, required: true, unique: true},
	name: {type: String, required: true, unique: true},
	categoryId: Number,
	description: String,
	price: Number,
	tags: [{type: String}],
	floweringTime: [{type: String}],
	flowerDiameter: {
		size: Number,
		unit: String
	},
	plantHeight: {
		from: Number,
		to: Number,
		unit: String
	},
	plantingLocation: String,
	frostResistance: String,
	isPublished: Boolean,
	inStock: Boolean,
	minAmount: Number
	//photos: ??
});

module.exports = model('Product', schema);