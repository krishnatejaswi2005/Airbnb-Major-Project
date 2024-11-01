const mongoose = require("mongoose");
const reviews = require("./reviews");
const schema = mongoose.Schema;
const listingsSchema = new schema({
	title: {
		type: String,
		required: true,
	},
	location: String,
	price: Number,

	image: {
		url: String,
		filename: String,
	},
	description: String,
	country: String,
	reviews: [
		{
			type: schema.Types.ObjectId,
			ref: "Reviews",
		},
	],
	owner: {
		type: schema.Types.ObjectId,
		ref: "User",
	},
	geometry: {
		type: {
			type: String,
			enum: ["Point"],
			required: true,
		},
		coordinates: {
			type: [Number],
			required: true,
		},
	},
});

listingsSchema.post("findOneAndDelete", async (listing) => {
	if (listing) {
		await reviews.deleteMany({ _id: { $in: listing.reviews } });
	}
});

const Listing = mongoose.model("Listings", listingsSchema);
module.exports = Listing;
