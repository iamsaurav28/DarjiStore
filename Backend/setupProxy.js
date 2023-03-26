const proxy = require("http-proxy-middleware");
module.exports = function(app) {
  app.use(proxy("/api/users/login", { // https://github.com/chimurai/http-proxy-middleware
    target: "http://localhost:8080",
    secure: false
  }));
};







