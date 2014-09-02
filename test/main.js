var Brightbox = require("../lib/brightboxapis")
  , Credentials = require("./credentials")
  ;

Brightbox.options({
    auth: new Brightbox.auth(Credentials.clientId, Credentials.clientSecret)
});

Brightbox.servers.list({}, function (err, servers) {
    console.log(err || "You have " + servers.length + " cloud servers.");
});

Brightbox.accounts.list({}, function (err, accounts) {
    console.log(err || accounts);
});
