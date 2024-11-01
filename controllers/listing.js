const Listing = require("../models/listing");
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");
const mapToken = process.env.MAP_API;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });

module.exports.index = async (req, res) => {
	let listings = await Listing.find();

	res.render("Listings/listings.ejs", { listings });
};

module.exports.newListing = (req, res) => {
	res.render("Listings/newListing.ejs");
};

module.exports.showListing = async (req, res) => {
	let listing = await Listing.findById(req.params.id)
		.populate({
			path: "reviews",
			populate: {
				path: "author",
			},
		})
		.populate("owner");

	if (!listing) {
		req.flash("error", "Listing does not exist!");
		res.redirect("/listings");
	}
	res.render("Listings/show.ejs", { listing });
};

module.exports.createListing = async (req, res) => {
	let response = await geocodingClient
		.forwardGeocode({
			query: req.body.listing.location,
			limit: 1,
		})
		.send();

	let url = req.file.path;
	let fileName = req.file.filename;

	let newlisting = new Listing(req.body.listing);

	newlisting.owner = req.user._id;

	newlisting.image = { url, fileName };

	newlisting.geometry = response.body.features[0].geometry;

	await newlisting.save();
	req.flash("success", "New Listing Created!");
	res.redirect("/listings");
};

module.exports.showEditListing = async (req, res) => {
	let listing = await Listing.findById(req.params.id);
	if (!listing) {
		req.flash("error", "Listing does not exist!");
		res.redirect("/listings");
	}
	res.render("Listings/edit.ejs", { listing });
};

module.exports.editListing = async (req, res) => {
	let { id } = req.params;
	let listing = await Listing.findById(id);
	if (!listing.owner._id.equals(res.locals.currUser._id)) {
		req.flash("error", "You do not have permission!");
		return res.redirect(`/listings/${id}`);
	}
	let mylisting = await Listing.findByIdAndUpdate(id, { ...req.body.listing });

	if (typeof req.file !== "undefined") {
		let url = req.file.path;
		let fileName = req.file.filename;
		mylisting.image = { url, fileName };
		mylisting.save();
	}

	req.flash("success", "Edited the listing!");
	res.redirect(`/listings/${id}`);
};

module.exports.deleteListing = async (req, res) => {
	let { id } = req.params;
	await Listing.findByIdAndDelete(id);
	req.flash("failure", "Listing Deleted!");

	res.redirect("/listings");
};
