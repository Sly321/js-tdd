let express = require("express");
let path = require("path");
let voting = require("./controllers/voting");
let app = express();

app.set("port", process.env.PORT || 3000);

// parsing req/res
let bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json

// set static directory
app.use(express.static(path.join(__dirname, 'public')));

// routes
let router = express.Router();
router.get('/api/getVotes', function (req, res) {
    res.send(voting.getVotes());
});
router.post('/api/vote/:index', function (req, res) {
    voting.vote(req.params.index);
    res.send(voting.getVotes());
});
app.use('/', router);

// run app
let server = app.listen(app.get('port'), function () {
    voting.init(['Awesome', 'Ok', 'Bad']);
    console.log('Express server listening on port ' + server.address().port);
});
