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

## APIs
Below there are the available APIs you can access with this module. For documentation, please
consider the [Brightbox API Documentation 1.0.0](https://api.gb1.brightbox.com/1.0/).

For questions, you can always [open a new issue](/issues/new).

 - `accounts`
   - `list`
   - `get`
   - `update`
   - `resetFtpPass`
 - `api_clients`
   - `list`
   - `create`
   - `get`
   - `update`
   - `delete`
   - `resetSecret`
 - `cloud_ips`
   - `list`
   - `create`
   - `get`
   - `update`
   - `delete`
   - `map`
   - `unmap`
 - `collaborations`
   - `list`
   - `create`
   - `get`
   - `delete`
 - `database_servers`
   - `list`
   - `create`
   - `get`
   - `update`
   - `delete`
   - `snapshot`
   - `reset_password`
   - `lock_resource`
 - `database_snapshots`
   - `list`
   - `get`
   - `update`
   - `delete`
   - `snapshot`
   - `lock_resource`
   - `unlock_resource`
 - `database_types`
   - `list`
   - `get`
 - `firewall_policies`
   - `list`
   - `create`
   - `get`
   - `apply_to`
   - `remove`
   - `delete`
 - `firewall_rules`
   - `create`
   - `get`
   - `update`
   - `delete`
 - `images`
   - `list`
   - `create`
   - `get`
   - `update`
   - `delete`
   - `lock_resource`
   - `unlock_resource`
 - `load_balancers`
   - `list`
   - `create`
   - `get`
   - `update`
   - `add_nodes`
   - `remove_nodes`
   - `add_listeners`
   - `remove_listeners`
   - `lock_resource`
   - `unlock_resource`
 - `server_groups`
   - `list`
   - `create`
   - `get`
   - `update`
   - `add_servers`
   - `remove_servers`
   - `move_servers`
   - `delete`
 - `server_types`
   - `list`
   - `get`
 - `servers`
   - `list`
   - `create`
   - `get`
   - `update`
   - `delete`
   - `start`
   - `stop`
   - `reset`
   - `shutdown`
   - `activate_console`
   - `snapshot`
   - `lock_resource`
   - `unlock_resource`
 - `user_collaborations`
   - `list`
   - `get`
   - `accept`
   - `reject`
   - `delete`
 - `users`
   - `list`
   - `get`
   - `update`
 - `zones`
   - `list`
   - `get`

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
