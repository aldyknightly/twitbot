var fs = require("fs"),
  path = require("path"),
  Twit = require("twit"),
  config = require(path.join(__dirname, "config.js"));

var makanan = [
  ["Nasi", "Bubur", "Mie", "Kentang"],
  ["Ayam", "Sapi", "Kambing", "Baso", "Bebek"],
  ["Goreng", "Rebus", "Bakar", "Steam"]
];

var randIndex = Math.floor(Math.random() * makanan.length);
var randIndex2 = Math.floor(Math.random() * makanan.length);
var randIndex3 = Math.floor(Math.random() * makanan.length);

var tweet = `Hari ini makan ${makanan[0][randIndex]} ${
  makanan[1][randIndex2]
} ${makanan[2][randIndex3]}`;
console.log(tweet);

var T = new Twit(config);

var twitfunct = function() {
  T.post("statuses/update", { status: tweet }, function(err, data, response) {
    console.log(data);
  });
};
// var twitfunct = function() {
// T.get('search/tweets', {q: 'from:ardhiraka_', count: 10, result_type: 'recent'}, function(error, tweets, response) {
//   tweets.statuses.forEach(function(tweet) {
//     console.log("tweet: " + tweet.text);
//   });
// });
// };

twitfunct();
setInterval(twitfunct, 1800000);
