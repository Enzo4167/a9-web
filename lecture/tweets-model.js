const mongoose = require('mongoose');
const tweetSchema = require("./tweets-schema");

const tweetModel = mongoose.model("TweetModel", tweetSchema);

module.exports = tweetModel