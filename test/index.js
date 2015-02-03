var Brightbox = require("../lib/brightboxapis")
  , Credentials = require(__dirname + "/credentials")
  ;

Brightbox.options({
    auth: new Brightbox.auth(Credentials.clientId, Credentials.clientSecret)
});

// Users
console.log("Fetching users.");
Brightbox.users.list({}, function (err, users) {
    console.log(users);
    console.log("Fetching " + users[0].name);
    Brightbox.users.get({id: users[0].id}, function (err, user) {
        console.log(user);
    });
});

Brightbox.server_types.list({}, function (err, server_types) {
    console.log(server_types);
});
