var Brightbox = require("../lib/brightboxapis");
var Credentials = require("./credentials");
var Auth = new Brightbox.auth(Credentials.clientId, Credentials.clientSecret);
Auth.getToken();
