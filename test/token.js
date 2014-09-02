var Brightbox = require("../lib/brightboxapis");
var Credentials = require("./credentials");
var Auth = new Brightbox.auth(Credentials.clientId, Credentials.clientSecret);
Brightbox.options({auth: Auth})

Brightbox.servers.list({}, function (err, servers) {
    console.log(err || "You have " + servers.length + " cloud servers.");
});
