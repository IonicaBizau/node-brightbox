/**
 * A module for interacting with Brightbox APIs
 * @module brightbox
 */
var Fs = require("fs")
  , Request = require("request")
  , Apis = require("./apis")
  ;

/**
 * Load the apis from apis index file
 * This file holds all version information
 * @private
 */
//var apis = require("./apis");

/**
 * BrightboxApis constructor.
 * @param {object} options Options to be passed in
 * @constructor
 */
function BrightboxApis(options) {
    this.options(options);
    this.addAPIs(Apis);
    this.auth = require("./auth/oauth");
    this.BrightboxApis = BrightboxApis;
    this._conf = {
        BRIGHTBOX_API_HOST: "https://api.gb1.brightbox.com"
    }
}

/**
 * Set options
 * @param {Object} opts Options to set
 */
BrightboxApis.prototype.options = function(opts) {
    this._options = opts || {};
};

BrightboxApis.prototype.request = function (opts, callback) {
    var self = this;
    var authObj = opts.opts.auth || self._options.auth;
    if (!authObj) {
        return callbak(new Error("Missing authentication object."));
    }
    authObj.get(function (err, token) {
        if (err) { return callback(err, null); }
        Request({
            url: self._conf.BRIGHTBOX_API_HOST + opts.url
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
};

/**
 * Add APIs endpoints to brightboxapis object
 * E.g. brightbox.server and brightbox.accounts
 * @param {Array} apis Apis to be added
 * @private
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
