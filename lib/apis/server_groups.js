function ServerGroups() {
    var Brightbox = this;
    return {
        // https://api.gb1.brightbox.com/1.0/#server_group_list_server_groups
        list: function (opt_opts, opt_callback) {
            Brightbox.request({
                method: "GET"
              , url: "/1.0/server_groups"
              , opts: opt_opts
            }, opt_callback);
        }
        // https://api.gb1.brightbox.com/1.0/#server_group_create_server_group
      , create: function (opt_opts, opt_callback) {
            Brightbox.request({
                method: "POST"
              , url: "/1.0/server_groups/"
              , opts: opt_opts
              , form: opt_opts.data
            }, opt_callback);
        }
        // https://api.gb1.brightbox.com/1.0/#server_group_get_server_group
      , get: function (opt_opts, opt_callback) {
            Brightbox.request({
                method: "GET"
              , url: "/1.0/server_groups/" + opt_opts.id
              , opts: opt_opts
            }, opt_callback);
        }
        // https://api.gb1.brightbox.com/1.0/#server_group_update_server_group
      , update: function (opt_opts, opt_callback) {
            Brightbox.request({
                method: "PUT"
              , url: "/1.0/server_groups/" + opt_opts.id
              , opts: opt_opts
              , body: JSON.stringify(opt_opts.data)
            }, opt_callback);
        }
        // https://api.gb1.brightbox.com/1.0/#server_group_add_servers_server_group
      , add_servers: function (opt_opts, opt_callback) {
            Brightbox.request({
                method: "POST"
              , url: "/1.0/server_groups/" + opt_opts.id + "/add_servers"
              , opts: opt_opts
              , form: opt_opts.data
            }, opt_callback);
        }
        // https://api.gb1.brightbox.com/1.0/#server_group_remove_servers_server_group
      , remove_servers: function (opt_opts, opt_callback) {
            Brightbox.request({
                method: "POST"
              , url: "/1.0/server_groups/" + opt_opts.id + "/remove_servers"
              , opts: opt_opts
              , form: opt_opts.data
            }, opt_callback);
        }
        // https://api.gb1.brightbox.com/1.0/#server_group_move_servers_server_group
      , move_servers: function (opt_opts, opt_callback) {
            Brightbox.request({
                method: "POST"
              , url: "/1.0/server_groups/" + opt_opts.id + "/move_servers"
              , opts: opt_opts
              , form: opt_opts.data
            }, opt_callback);
        }
        // https://api.gb1.brightbox.com/1.0/#server_group_delete_server_group
      , delete: function (opt_opts, opt_callback) {
            Brightbox.request({
                method: "DELETE"
              , url: "/1.0/server_groups/" + opt_opts.id
              , opts: opt_opts
            }, opt_callback);
        }
    };
}

module.exports = ServerGroups;
