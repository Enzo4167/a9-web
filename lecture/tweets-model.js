const mongoose = require('mongoose');
const tweetSchema = require("./tweets-Schema");

const tweetModel = mongoose.model("TweetModel", tweetSchema);

module.exports = tweetModel