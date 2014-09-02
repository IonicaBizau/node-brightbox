function Servers() {
    var Brightbox = this;
    return {
        list: function (opt_opts, opt_callback) {
            Brightbox.request({
                method: "GET"
              , url: "/1.0/servers"
              , opts: opt_opts
            }, opt_callback);
        }
    };
}

module.exports = Servers;
