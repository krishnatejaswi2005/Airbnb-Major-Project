const Reviews = require("../models/reviews.js");
const Listing = require("../models/listing.js");

module.exports.createReview = async (req, res) => {
	let listing = await Listing.findById(req.params.id);

	let newReview = new Reviews(req.body.review);
	newReview.author = req.user._id;
	listing.reviews.push(newReview);

	await newReview.save();
	await listing.save();
	req.flash("success", "New Review Created!");

	res.redirect(`/listings/${listing._id}`);
};

module.exports.deleteReview = async (req, res) => {
	let { id } = req.params;
	await Listing.findByIdAndUpdate(id, { $set: { reviews: [] } });
	req.flash("failure", "Review Deleted!");

	res.redirect(`/listings/${id}`);
};
