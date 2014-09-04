function Servers() {
    var Brightbox = this;
    return {
        // https://api.gb1.brightbox.com/1.0/#server_list_servers
        list: function (opt_opts, opt_callback) {
            Brightbox.request({
                method: "GET"
              , url: "/1.0/servers"
              , opts: opt_opts
            }, opt_callback);
        }
        // https://api.gb1.brightbox.com/1.0/#server_create_server
      , create: function (opt_opts, opt_callback) {
            Brightbox.request({
                method: "POST"
              , url: "/1.0/servers/"
              , opts: opt_opts
              , form: opt_opts.data
            }, opt_callback);
        }
        // https://api.gb1.brightbox.com/1.0/#server_get_server
      , get: function (opt_opts, opt_callback) {
            Brightbox.request({
                method: "GET"
              , url: "/1.0/servers/" + opt_opts.id
              , opts: opt_opts
            }, opt_callback);
        }
        // https://api.gb1.brightbox.com/1.0/#server_update_server
      , update: function (opt_opts, opt_callback) {
            Brightbox.request({
                method: "PUT"
              , url: "/1.0/servers/" + opt_opts.id
              , opts: opt_opts
              , body: JSON.stringify(opt_opts.data)
            }, opt_callback);
        }
        // https://api.gb1.brightbox.com/1.0/#server_delete_server
      , delete: function (opt_opts, opt_callback) {
            Brightbox.request({
                method: "DELETE"
              , url: "/1.0/servers/" + opt_opts.id
              , opts: opt_opts
            }, opt_callback);
        }
        // https://api.gb1.brightbox.com/1.0/#server_start_server
      , start: function (opt_opts, opt_callback) {
            Brightbox.request({
                method: "POST"
              , url: "/1.0/servers/" + opt_opts.id + "/start"
              , opts: opt_opts
            }, opt_callback);
        }
        // https://api.gb1.brightbox.com/1.0/#server_stop_server
      , stop: function (opt_opts, opt_callback) {
            Brightbox.request({
                method: "POST"
              , url: "/1.0/servers/" + opt_opts.id + "/stop"
              , opts: opt_opts
            }, opt_callback);
        }
        // https://api.gb1.brightbox.com/1.0/#server_reboot_server
      , reboot: function (opt_opts, opt_callback) {
            Brightbox.request({
                method: "POST"
              , url: "/1.0/servers/" + opt_opts.id + "/reboot"
              , opts: opt_opts
            }, opt_callback);
        }
        // https://api.gb1.brightbox.com/1.0/#server_reset_server
      , reset: function (opt_opts, opt_callback) {
            Brightbox.request({
                method: "POST"
              , url: "/1.0/servers/" + opt_opts.id + "/reset"
              , opts: opt_opts
            }, opt_callback);
        }
        // https://api.gb1.brightbox.com/1.0/#server_shutdown_server
      , shutdown: function (opt_opts, opt_callback) {
            Brightbox.request({
                method: "POST"
              , url: "/1.0/servers/" + opt_opts.id + "/shutdown"
              , opts: opt_opts
            }, opt_callback);
        }
        // https://api.gb1.brightbox.com/1.0/#server_activate_console_server
      , activate_console: function (opt_opts, opt_callback) {
            Brightbox.request({
                method: "POST"
              , url: "/1.0/servers/" + opt_opts.id + "/activate_console"
              , opts: opt_opts
            }, opt_callback);
        }
        // https://api.gb1.brightbox.com/1.0/#server_snapshot_server
      , snapshot: function (opt_opts, opt_callback) {
            Brightbox.request({
                method: "POST"
              , url: "/1.0/servers/" + opt_opts.id + "/snapshot"
              , opts: opt_opts
            }, opt_callback);
        }
        // https://api.gb1.brightbox.com/1.0/#server_lock_resource_server
      , lock_resource: function (opt_opts, opt_callback) {
            Brightbox.request({
                method: "PUT"
              , url: "/1.0/servers/" + opt_opts.id + "/lock_resource"
              , opts: opt_opts
            }, opt_callback);
        }
        // https://api.gb1.brightbox.com/1.0/#server_unlock_resource_server
      , unlock_resource: function (opt_opts, opt_callback) {
            Brightbox.request({
                method: "PUT"
              , url: "/1.0/servers/" + opt_opts.id + "/unlock_resource"
              , opts: opt_opts
            }, opt_callback);
        }
    };
}

module.exports = Servers;
