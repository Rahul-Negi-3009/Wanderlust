const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const Listing = require("../models/listing.js");
const {listingSchema} = require("../schema.js");

const validateListing = async (req, res, next) => {
  let {error} = listingSchema.validate(req.body);
  if(error){
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  } else{
    next();
  };
};

//Index Route
router.get("/", wrapAsync(async (req, res) =>{
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
}));
//New Route
router.get("/new", (req, res) => {
  res.render("listings/new.ejs");
});
//Show Route 
router.get("/:id", async (req, res) => {
  let {id} = req.params;
  const listing = await Listing.findById(id).populate("reviews");
  res.render("listings/show.ejs", {listing});
});
//Create Route
router.post("/", validateListing, wrapAsync(async (req, res, next) => {
  let {title, description, image, price, location, country} = req.body;
  const newListing = new Listing({title: title, description: description, image: image, price: price, location: location, country: country});
  await newListing.save();
  res.redirect("/listings");
}));
//Edit Route
router.get("/:id/edit", wrapAsync(async(req, res) => {
  let {id} = req.params;
  const listing = await Listing.findById(id);
  res.render("listings/edit.ejs", {listing})
}));
//Update Route
router.put("/:id", validateListing, wrapAsync(async (req, res) => {
  let {id} = req.params;
  let {title, description, image, price, location, country} = req.body;
  await Listing.findByIdAndUpdate(id, {title: title, description: description, image: image, price: price, location: location, country: country});
  res.redirect(`/listings/${id}`);
}));
//Delete Route
router.delete("/:id", wrapAsync(async (req, res) => {
  let {id} = req.params;
  let deletedListing = await Listing.findByIdAndDelete(id);
  console.log(deletedListing);
  res.redirect("/listings");
}));
module.exports = router;
