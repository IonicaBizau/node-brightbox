// Dependencies
var Fs = require("fs")
  , Request = require("request")
  , Apis = require("./apis")
  ;

/*!
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
    this.options = opts || {};
    return this;
};

/*!
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

    var authObj = opts.opts.auth || self.options.auth;
    if (!authObj) {
        return callbak(new Error("Missing authentication object."));
    }

    authObj.get(function (err, token) {
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
            // TODO Expired token?
            if (err) { return callback(err); }
            callback(err, body);
        });
    });
    return self;
};

/*!
 * addAPIs
 * Adds the API to the instance.
 *
 * @name addAPIs
 * @function
 * @param {Object} apis The APIs to add.
 * @return {undefined}
 */
BrightboxApis.prototype.addAPIs = function(apis) {
    for (var apiName in apis) {
        this[apiName] = apis[apiName].bind(this)();
    }
};

var brightbox = new BrightboxApis();

/**
 * Exports brightbox.
 */
module.exports = brightbox;
