const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const BooksSchema = new Schema({
 title: {
    type: String,
    required: true,
 }, 
 description: {
    type: String,
    // required: true,
 }, 
 thumbnail: {
    type: String,
    // required: true,
 }, 
 stars: {
    type: number,
    // required: true,
 }, 
 category: {
    type: Array,
    // required: true,
 }, 
 createdAt: {
    type: Date,
    default: Date.now(),
 }, 



});


module.exports = mongoose.model("Book", BookSchema);