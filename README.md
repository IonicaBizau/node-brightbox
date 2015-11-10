[![brightbox](http://i.imgur.com/sfG2GW9.png)](#)

# brightbox [![Support this project][donate-now]][paypal-donations]

A Node.JS module, which provides an object oriented wrapper for the Brightbox API.

## Installation

```sh
$ npm i brightbox
```

## Example

```js
var Brightbox = require("brightbox/")
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
        console.log("Fetching the server types.");
        Brightbox.server_types.list({}, function (err, server_types) {
            console.log(server_types);
        });
    });
});
```

## Documentation

### `BrightboxApis(options)`
Creates a new Brightbox instance.

#### Params
- **Object** `options`: The options object.

### `options(opts)`
Sets the global options.

#### Params
- **Object** `opts`: The options to set.

#### Return
- **Brightbox** The Brightbox instance.

### `request(opts, callback)`
Runs requests to the API urls.

#### Params
- **Object** `opts`: Optional options.
- **Function** `callback`: The callback function.

#### Return
- **Brightbox** The Brightbox instance.

### `addAPIs(apis)`
Adds the API to the instance.

#### Params
- **Object** `apis`: The APIs to add.

## APIs

Below there are the available APIs you can access with this module. For documentation, please consider the [Brightbox API Documentation 1.0.0](https://api.gb1.brightbox.com/1.0/).

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
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

## License

[KINDLY][license] © [Ionică Bizău][website]

[license]: http://ionicabizau.github.io/kindly-license/?author=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica@gmail.com%3E&year=2014

[website]: http://ionicabizau.net
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md