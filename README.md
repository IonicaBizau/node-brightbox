
[![brightbox](http://i.imgur.com/sfG2GW9.png)](#)

# brightbox

 [![Patreon](https://img.shields.io/badge/Support%20me%20on-Patreon-%23e6461a.svg)][patreon] [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![AMA](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/brightbox.svg)](https://www.npmjs.com/package/brightbox) [![Downloads](https://img.shields.io/npm/dt/brightbox.svg)](https://www.npmjs.com/package/brightbox) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> A Node.JS module, which provides an object oriented wrapper for the Brightbox API.

## :cloud: Installation

```sh
$ npm i --save brightbox
```


## :clipboard: Example



```js
var Brightbox = require("../lib/")
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

## :memo: Documentation


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



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :moneybag: Donations

Another way to support the development of my open-source modules is
to [set up a recurring donation, via Patreon][patreon]. :rocket:

[PayPal donations][paypal-donations] are appreciated too! Each dollar helps.

Thanks! :heart:


## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[patreon]: https://www.patreon.com/ionicabizau
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2014#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
