const {Schema, model} = require('mongoose');

const schema = new Schema({
	key: {type: Number, required: true, unique: true},
	name: {type: String, required: true, unique: true},
	categoryId: {type: Number, required: true},
	description: {type: String, required: true},
	price: {type: Number, required: true},
	tags: [{type: String, required: true}],
	floweringTime: [{type: String, required: true}],
	flowerDiameter: {
		size: {type: Number, required: true},
		unit: {type: String, required: true}
	},
	plantHeight: {
		from: {type: Number, required: true},
		to: {type: Number, required: true},
		unit: {type: String, required: true}
	},
	plantingLocation: {type: String, required: true},
	frostResistance: {type: String, required: true},
	isPublished: {type: Boolean, required: true},
	inStock: {type: Boolean, required: true},
	minAmount: {type: Number, required: true}
	//photos: ??
});

module.exports = model('Product', schema);