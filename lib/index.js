// Dependencies
var Fs = require("fs")
  , Request = require("request")
  , Apis = require("./apis")
  , LazyApi = require("lazy-api")
  ;

LazyApi.returnHandler = function (path, name, scope) {
    return require(path).bind(scope)();
};

/**
 * BrightboxApis
 * Creates a new Brightbox instance.
 *
 * @name BrightboxApis
 * @function
 * @param {Object} options The options object.
 */
function BrightboxApis(options) {
    this.options(options);
    this.addAPIs(Apis);
    this.auth = require("./auth/oauth");
    this.BrightboxApis = BrightboxApis;
    this.conf = {
        BRIGHTBOX_API_HOST: "https://api.gb1.brightbox.com"
    }
}

/**
 * options
 * Sets the global options.
 *
 * @name options
 * @function
 * @param {Object} opts The options to set.
 * @return {Brightbox} The Brightbox instance.
 */
BrightboxApis.prototype.options = function(opts) {
    this.opts = opts || {};
    return this;
};

/**
 * request
 * Runs requests to the API urls.
 *
 * @name request
 * @function
 * @param {Object} opts Optional options.
 * @param {Function} callback The callback function.
 * @return {Brightbox} The Brightbox instance.
 */
BrightboxApis.prototype.request = function (opts, callback) {
    var self = this;

    var authObj = opts.opts.auth || self.opts.auth;
    if (!authObj) {
        return callbak(new Error("Missing authentication object."));
    }

    authObj.get(opts, function (err, token) {
        if (err) { return callback(err, null); }
        Request({
            url: self.conf.BRIGHTBOX_API_HOST + opts.url
          , method: opts.method || "GET"
          , form: opts.form
          , body: opts.body
          , headers: {
                "Authorization": "OAuth " + token
            }
          , json: true
        }, function (err, res, body) {

            // Expired token
            if (res.statusCode === 401) {
                opts.refreshToken = true;
                return self.request(opts, callback);
            }

            if (err) { return callback(err); }
            callback(err, body);
        });
    });
    return self;
};

/**
 * addAPIs
 * Adds the API to the instance.
 *
 * @name addAPIs
 * @function
 * @param {Object} apis The APIs to add.
 */
BrightboxApis.prototype.addAPIs = function(apis) {
    var self = this;
    Object.keys(apis).forEach(function (c) {
        LazyApi(self, c, apis[c]);
    });
};


module.exports = new BrightboxApis();
