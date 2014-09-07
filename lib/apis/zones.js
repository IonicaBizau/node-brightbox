function Zones() {
    var Brightbox = this;
    return {
        // https://api.gb1.brightbox.com/1.0/#zone_list_zones
        list: function (opt_opts, opt_callback) {
            Brightbox.request({
                method: "GET"
              , url: "/1.0/zones"
              , opts: opt_opts
            }, opt_callback);
        }
        // https://api.gb1.brightbox.com/1.0/#zone_get_zone
      , get: function (opt_opts, opt_callback) {
            Brightbox.request({
                method: "GET"
              , url: "/1.0/zones/" + opt_opts.id
              , opts: opt_opts
            }, opt_callback);
        }
    };
}

module.exports = Zones;
