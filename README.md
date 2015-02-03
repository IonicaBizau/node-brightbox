![](http://i.imgur.com/sfG2GW9.png)

# Brightbox
A Node.JS module, which provides an object oriented wrapper for the Brightbox API.

## Installation
```sh
$ npm install brightbox
```

## Example

```js
// Require the module
var Brightbox = require("brightbox");

// Add auth object
Brightbox.options({
    auth: new Brightbox.auth(YOUR_CLIENT_ID, YOUR_CLIENT_SECRET)
});

// List servers
Brightbox.servers.list({}, function (err, servers) {
    console.log(err || "You have " + servers.length + " cloud servers.");
});

// List accounts
Brightbox.accounts.list({}, function (err, accounts) {
    console.log(err || accounts);
});
```

## How to contribute

1. File an issue in the repository, using the bug tracker, describing the
   contribution you'd like to make. This will help us to get you started on the
   right foot.
2. Fork the project in your account and create a new branch:
   `your-great-feature`.
3. Commit your changes in that branch.
4. Open a pull request, and reference the initial issue in the pull request
   message.

## License
See the [LICENSE](./LICENSE) file.
