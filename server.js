var fs = require("fs"),
  path = require("path"),
  Twit = require("twit"),
  config = require(path.join(__dirname, "config.js"));

var makanan = [
  ["Nasi", "Bubur", "Mie", "Kentang"],
  ["Ayam", "Sapi", "Kambing", "Baso"],
  ["Goreng", "Rebus", "Bakar", "Steam"]
];

var randIndex = Math.floor(Math.random() * makanan.length);
var randIndex2 = Math.floor(Math.random() * makanan.length);
var randIndex3 = Math.floor(Math.random() * makanan.length);

var tweet = `Hari ini makan ${makanan[0][randIndex]} ${
  makanan[1][randIndex2]
} ${makanan[2][randIndex3]}`;

var T = new Twit(config);

T.post("statuses/update", { status: tweet }, function(err, data, response) {
  console.log(data);
});
