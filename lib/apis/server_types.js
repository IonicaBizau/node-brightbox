function ServerTypes() {
    var Brightbox = this;
    return {
        // https://api.gb1.brightbox.com/1.0/#server_type_list_server_types
        list: function (opt_opts, opt_callback) {
            Brightbox.request({
                method: "GET"
              , url: "/1.0/server_types"
              , opts: opt_opts
            }, opt_callback);
        }
        // https://api.gb1.brightbox.com/1.0/#server_type_get_server_type
      , get: function (opt_opts, opt_callback) {
            Brightbox.request({
                method: "GET"
              , url: "/1.0/server_types/" + opt_opts.id
              , opts: opt_opts
            }, opt_callback);
        }
    };
}

module.exports = ServerTypes;
