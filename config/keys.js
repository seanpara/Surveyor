if (process.env.NODE_ENV === "production") {
  // in production on heroku
  module.exports = require("./prod");
} else {
  // in development on local machine
  module.exports = require("./dev");
}
