/**
 * A module for interacting with Brightbox APIs
 * @module brightbox
 */

/**
 * Load the apis from apis index file
 * This file holds all version information
 * @private
 */
var apis = require("./apis");

/**
 * BrightboxApis constructor.
 * @param {object} options Options to be passed in
 * @constructor
 */
function BrightboxApis(options) {
    this.options(options);
    this.addAPIs(apis);
    this.auth = {/*TODO*/};
    this.BrightboxApis = BrightboxApis;
}

/**
 * Set options
 * @param {Object} opts Options to set
 */
BrightboxApis.prototype.options = function(opts) {
    this._options = opts || {};
};

/**
 * Add APIs endpoints to brightboxapis object
 * E.g. brightbox.server and brightbox.accounts
 * @param {Array} apis Apis to be added
 * @private
 */
BrightboxApis.prototype.addAPIs = function(apis) {
    for (var apiName in apis) {
        this[apiName] = apis[apiName].bind(this);
    }
};

var brightbox = new BrightboxApis();

/**
 * Exports brightbox.
 */
module.exports = brightbox;
