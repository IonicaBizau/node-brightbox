function ApiClients() {
    var Brightbox = this;
    return {
        // https://api.gb1.brightbox.com/1.0/#api_client_list_api_clients
        list: function (opt_opts, opt_callback) {
            Brightbox.request({
                method: "GET"
              , url: "/1.0/api_clients"
              , opts: opt_opts
            }, opt_callback);
        }
        // https://api.gb1.brightbox.com/1.0/#api_client_create_api_client
      , create: function (opt_opts, opt_callback) {
            Brightbox.request({
                method: "POST"
              , url: "/1.0/api_clients"
              , opts: opt_opts
              , form: opt_opts.data
            }, opt_callback);
        }
        // https://api.gb1.brightbox.com/1.0/#api_client_get_api_client
      , get: function (opt_opts, opt_callback) {
            Brightbox.request({
                method: "GET"
              , url: "/1.0/api_clients/" + opt_opts.id
              , opts: opt_opts
            }, opt_callback);
        }
        // https://api.gb1.brightbox.com/1.0/#api_client_update_api_client
      , update: function (opt_opts, opt_callback) {
            Brightbox.request({
                method: "PUT"
              , url: "/1.0/api_clients/" + opt_opts.id
              , opts: opt_opts
              , body: JSON.stringify(opt_opts.data)
            }, opt_callback);
        }
        // https://api.gb1.brightbox.com/1.0/#api_client_delete_api_client
      , delete: function (opt_opts, opt_callback) {
            Brightbox.request({
                method: "DELETE"
              , url: "/1.0/api_clients/" + opt_opts.id
              , opts: opt_opts
              , body: JSON.stringify(opt_opts.data)
            }, opt_callback);
        }
        // https://api.gb1.brightbox.com/1.0/#api_client_reset_secret_api_client
      , resetSecret: function (opt_opts, opt_callback) {
            Brightbox.request({
                method: "POST"
              , url: "/1.0/api_clients/" + opt_opts.id + "/reset_secret"
              , opts: opt_opts
            }, opt_callback);
        }
    };
}

module.exports = ApiClients;
