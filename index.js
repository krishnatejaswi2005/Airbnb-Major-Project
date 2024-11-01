if (process.env.NODE_ENV !== "production") {
	require("dotenv").config();
}

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const ejsMate = require("ejs-mate");
const expressError = require("./utils/expressError.js");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");
const MongoStore = require("connect-mongo");

const listings = require("./routes/listing.js");
const reviews = require("./routes/review.js");
const userRoute = require("./routes/user.js");

const methodOverride = require("method-override");
const { wrap } = require("module");
app.use(methodOverride("_method"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const dbUrl = process.env.ATLASDB_URL;

const store = MongoStore.create({
	mongoUrl: dbUrl,
	crypto: {
		secret: process.env.SECRET,
	},
	touchAfter: 24 * 60 * 60,
});

store.on("error", () => {
	console.log("Error in session store", e);
});

const sessionOptions = {
	store,
	secret: process.env.SECRET,
	resave: false,
	saveUninitialized: true,
	cookie: {
		expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
		maxAge: 7 * 24 * 60 * 60 * 1000,
		httpOnly: true,
	},
};

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.engine("ejs", ejsMate);

// const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
	.then(() => {
		console.log("database connected");
	})
	.catch((err) => {
		console.log(err);
	});

async function main() {
	await mongoose.connect(dbUrl);
}

app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
	res.locals.success = req.flash("success");
	res.locals.failure = req.flash("failure");
	res.locals.error = req.flash("error");
	res.locals.currUser = req.user;
	next();
});
app.use("/", userRoute);
app.use("/listings", listings);
app.use("/listings/:id/reviews", reviews);

app.all("*", (req, res, next) => {
	next(new expressError(404, "Page Not Found"));
});

app.use((err, req, res, next) => {
	let { statusCode = 500, message = "Something went wrong" } = err;
	res.status(statusCode).render("error.ejs", { statusCode, message });
});

app.listen(8080, () => {
	console.log("server started");
});
