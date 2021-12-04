const mongoose = require("mongoose");
const tweetSchema = mongoose.Schema({
    topic:String,
    userName:String,
    verified:{type:Boolean, defaultValue:false},
    attachment:{
        video:String
    }
}, {collection:"tweets"});

module.exports = tweetSchema;