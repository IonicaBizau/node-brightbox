var Request = require("request");

function OAuth(clientId, clientSecret, redirectUri, opt_opts) {
    this.clientId = clientId;
    this.clientSecret = clientSecret;
    this.redirectUri = redirectUri;
    this.opts = Object(opt_opts);
    this.credentials = {};
}

OAuth.prototype.getToken = function (opt_callback) {
    var auth = new Buffer(this.clientId + ":" + this.clientSecret).toString("base64");
    Request({
        url: "https://api.gb1.brightbox.com/token"
      , method: "POST"
      , form: {
            client_id: this.clientId
          , grant_type: "none"
        }
      , headers: {
            "Authorization": "Basic " + auth
        }
      , json: true
    }, function (err, res, body) {
        debugger
    });
};

module.exports = OAuth;
