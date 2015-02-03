function Accounts() {
    var Brightbox = this;
    return {
        // https://api.gb1.brightbox.com/1.0/#account_list_accounts
        list: function (opt_opts, opt_callback) {
            Brightbox.request({
                method: "GET"
              , url: "/1.0/accounts"
              , opts: opt_opts
            }, opt_callback);
        }
        // https://api.gb1.brightbox.com/1.0/#account_get_account
      , get: function (opt_opts, opt_callback) {
            Brightbox.request({
                method: "GET"
              , url: "/1.0/accounts/" + (opt_opts.account_id || opt_opts.id)
              , opts: opt_opts
            }, opt_callback);
        }
        // https://api.gb1.brightbox.com/1.0/#account_update_account
      , update: function (opt_opts, opt_callback) {
            Brightbox.request({
                method: "PUT"
              , url: "/1.0/accounts/" + (opt_opts.account_id || opt_opts.id)
              , opts: opt_opts
              , body: JSON.stringify(opt_opts.data)
            }, opt_callback);
        }
        // https://api.gb1.brightbox.com/1.0/#account_reset_ftp_password_account
      , resetFtpPass: function (opt_opts, opt_callback) {
            Brightbox.request({
                method: "POST"
              , url: "/1.0/accounts/" + (opt_opts.account_id || opt_opts.id) + "/reset_ftp_password"
              , opts: opt_opts
            }, opt_callback);
        }
    };
}

module.exports = Accounts;
