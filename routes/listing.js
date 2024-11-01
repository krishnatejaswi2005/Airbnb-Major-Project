const express = require("express");
const router = express.Router();

const wrapAsync = require("../utils/wrapAsync.js");

const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");

const listingsController = require("../controllers/listing.js");

const { storage } = require("../cloudConfig.js");

const multer = require("multer");
const upload = multer({ storage });

router
	.route("/")
	.get(wrapAsync(listingsController.index))
	.post(
		isLoggedIn,
		upload.single("listing[image]"),
		validateListing,
		wrapAsync(listingsController.createListing)
	);

router.get("/newListing", isLoggedIn, listingsController.newListing);

router
	.route("/:id")
	.get(wrapAsync(listingsController.showListing))
	.put(
		isLoggedIn,
		isOwner,
		upload.single("listing[image]"),
		validateListing,
		wrapAsync(listingsController.editListing)
	)
	.delete(isLoggedIn, isOwner, wrapAsync(listingsController.deleteListing));

router.get(
	"/:id/edit",
	isLoggedIn,
	isOwner,
	wrapAsync(listingsController.showEditListing)
);

module.exports = router;
