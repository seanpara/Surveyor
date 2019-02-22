if (process.env.NODE_ENV === "production") {
  // in production on heroku
  require("./prod");
} else {
  // in development on local machine
  module.exports = require("./dev");
}
//prod client ID: 234909256793-ofnmvtqd3q1tuoh9i5fba22fv3su16ar.apps.googleusercontent.com
// prod cient secret : ojmAXU49WTwlCl2K1axKIflh
