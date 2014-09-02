function ApiClients() {
    var Brightbox = this;
    return {
        list: function (opt_opts, opt_callback) {
            Brightbox.request({
                method: "GET"
              , url: "/1.0/api_clients"
              , opts: opt_opts
            }, opt_callback);
        }
      , create: function (opt_opts, opt_callback) {
            Brightbox.request({
                method: "POST"
              , url: "/1.0/api_clients"
              , opts: opt_opts
              , form: opt_opts.data
            }, opt_callback);
        }
      , get: function (opt_opts, opt_callback) {
            Brightbox.request({
                method: "GET"
              , url: "/1.0/api_clients/" + opt_opts.id
              , opts: opt_opts
            }, opt_callback);
        }
      , update: function (opt_opts, opt_callback) {
            Brightbox.request({
                method: "PUT"
              , url: "/1.0/api_clients/" + opt_opts.id
              , opts: opt_opts
              , body: JSON.stringify(opt_opts.data)
            }, opt_callback);
        }
      , delete: function (opt_opts, opt_callback) {
            Brightbox.request({
                method: "DELETE"
              , url: "/1.0/api_clients/" + opt_opts.id
              , opts: opt_opts
              , body: JSON.stringify(opt_opts.data)
            }, opt_callback);
        }
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
