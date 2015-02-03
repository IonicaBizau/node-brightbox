// Dependencies
var Request = require("request");

/*!
 * OAuth
 * Creates a new `OAuth` instance.
 *
 * @name OAuth
 * @function
 * @param {String} clientId The client id.
 * @param {String} clientSecret The client secret.
 * @param {String} redirectUri The redirect URI.
 * @param {Object} opt_opts Additional options.
 * @return {OAuth} The `OAuth` instance.
 */
function OAuth(clientId, clientSecret, redirectUri, opt_opts) {
    this.clientId = clientId;
    this.clientSecret = clientSecret;
    this.redirectUri = redirectUri;
    this.opts = Object(opt_opts);
    this.credentials = {};
}

/*!
 * get
 * Gets the access token.
 *
 * @name get
 * @function
 * @param {Object} opt_opts Optional options:
 *
 *  - `refreshToken` (Boolean): If `true`, the token will be refreshed.
 *
 * @param {Function} opt_callback The callback function.
 * @return {undefined}
 */
OAuth.prototype.get = function (opt_opts, opt_callback) {
    var self = this;

    if (typeof opt_opts === "function") {
        opt_callback = opt_opts;
        opt_opts = {};
    }

    if (self._tokens && self._tokens.access_token && !opt_opts.refreshToken) {
        return opt_callback(null, self._tokens.access_token);
    }

    delete opt_opts.refreshToken;
    self.getToken(function (err, tokens) {
        if (err) { return opt_callback(err, null); }
        self.get(opt_callback);
    });
};

/*!
 * getToken
 * Gets the access token.
 *
 * @name getToken
 * @function
 * @param {Function} opt_callback The callback function.
 * @return {undefined}
 */
OAuth.prototype.getToken = function (opt_callback) {
    var self = this;
    Request({
        url: "https://api.gb1.brightbox.com/token"
      , method: "POST"
      , form: {
            client_id: self.clientId
          , grant_type: "none"
        }
      , auth: {
            user: self.clientId
          , pass: self.clientSecret
        }
      , json: true
    }, function (err, res, body) {

        if (body.access_token) {
            self._tokens = body;
        } else {
            err = err ? err : new Error("Cannot get access_token value");
        }

        opt_callback(err, body);
    });
};

module.exports = OAuth;
