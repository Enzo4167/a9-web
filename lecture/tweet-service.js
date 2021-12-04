const dao = require('./tweets-dao');

module.exports = (app) => {
    const findAllTweets = (req, res) => {
        dao.findAllTweet()
            .then(tweets =>res.json(tweets));
    }
    const findTweetById = (req, res) => {
        dao.findTweetById(req.params.id)
            .then(tweets =>res.json(tweets));
    }
    const createTweet = (req, res) => {
        dao.createTweet(req.body)
            .then(tweet => res.json(tweet))
    }

    const updateTweet = (req, res) =>
        dao.updateTweet(req.params.id, req.body)
            .then(status => res.json(tweet))

    const deleteTweet = (req, res) => {
        dao.deleteTweetById(req.params.id)
            .then(status => res.json(status));
    }

    app.get("/api/tweets", findAllTweets);
    app.get("/api/tweets/:id", findTweetById);
    app.post("/api/tweets", createTweet);
    app.delete("/api/tweets/:id",deleteTweet );
    app.put("/api/tweets/:id", updateTweet);
};