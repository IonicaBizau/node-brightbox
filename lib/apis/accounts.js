function Servers() {
    var Brightbox = this;
    return {
        list: function (opt_opts, opt_callback) {
            Brightbox.request({
                method: "GET"
              , url: "/1.0/accounts"
              , opts: opt_opts
            }, opt_callback);
        }
      , get: function (opt_opts, opt_callback) {
            Brightbox.request({
                method: "GET"
              , url: "/1.0/accounts/" + (opt_opts.account_id || opt_opts.id)
              , opts: opt_opts
            }, opt_callback);
        }
      , update: function (opt_opts, opt_callback) {
            Brightbox.request({
                method: "PUT"
              , url: "/1.0/accounts/" + (opt_opts.account_id || opt_opts.id)
              , opts: opt_opts
              , body: JSON.stringify(opt_opts.data)
            }, opt_callback);
        }
      , resetFtpPass: function (opt_opts, opt_callback) {
            Brightbox.request({
                method: "POST"
              , url: "/1.0/accounts/" + (opt_opts.account_id || opt_opts.id) + "/reset_ftp_password"
              , opts: opt_opts
            }, opt_callback);
        }
    };
}

module.exports = Servers;
