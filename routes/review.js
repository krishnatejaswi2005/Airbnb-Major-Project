const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");

const { validatereview, isLoggedIn, isAuthor } = require("../middleware.js");

const reviewsController = require("../controllers/reviews.js");

router.post(
	"/",
	isLoggedIn,
	validatereview,
	wrapAsync(reviewsController.createReview)
);

router.delete(
	"/:reviewId",
	isAuthor,
	wrapAsync(reviewsController.deleteReview)
);

module.exports = router;
