function DatabaseTypes() {
    var Brightbox = this;
    return {
        // https://api.gb1.brightbox.com/1.0/#database_type_list_database_types
        list: function (opt_opts, opt_callback) {
            Brightbox.request({
                method: "GET"
              , url: "/1.0/database_types"
              , opts: opt_opts
            }, opt_callback);
        }
        // https://api.gb1.brightbox.com/1.0/#database_type_get_database_type
      , get: function (opt_opts, opt_callback) {
            Brightbox.request({
                method: "GET"
              , url: "/1.0/database_types/" + opt_opts.id
              , opts: opt_opts
            }, opt_callback);
        }
    };
}

module.exports = DatabaseTypes;
