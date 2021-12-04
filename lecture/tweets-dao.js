// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/webdev');

const tweetModel = require("./tweets-model");




promise = tweetModel.find()
    .then((data)=>{
        console.log(data)
    });

const findAllTweet = ()=>tweetModel.find();
// findAllTweet()
//     .then(tweets=>console.log(tweets));

//
const findTweetById = (id) => tweetModel.find({_id:id});
// findTweetById("619bfef765d29c641e787070")
//     .then(tweet=>console.log(tweet));
//
//
//const findTweetById = (id) => tweetModel.findById(id);
// findTweetById("619bfef765d29c641e787070")
//     .then(tweet=>console.log(tweet));
//
 const findTweetByUsername = (username) => tweetModel.findOne({userName: username});
// findTweetByUsername("NodeJS").then(tweet=>console.log(tweet));
// //find always comes back with an array
//
//
 const deleteTweetById = (id) =>
    tweetModel.remove({_id:id});
// deleteTweetById("619bfef765d29c641e787070").then(status=>console.log(status))
//
 const createTweet = (newTweet) => tweetModel.create(newTweet)

createTweet({
        "topic": "Web Development",
        "userName": "NodeJS",
        "verified": true,
        "handle": "NodeJS",
        "title": "",
        "tweet": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        "time": "last month",
        "logo-image": "../../../images/node.png",
        "avatar-image": "../../../images/node.png",
        "tweets": "120K",
        "stats": {
        "comments": 123,
            "retweets": 234,
            "likes": 345
    }
}).then(actualSavedTweet => console.log(actualSavedTweet))
//
 const updateTweet = (id, updates) =>
     tweetModel.updateOne({_id:id}, {$set:updates})
//
// updateTweet("619c1cf9274bfe0aef59c91d", {verified:false})
//     .then(status=>console.log(status))
//

module.exports = {
    findTweetByUsername, findTweetById, findAllTweet,
    createTweet, updateTweet, deleteTweetById}
