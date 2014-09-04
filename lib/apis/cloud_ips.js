function CloudIps() {
    var Brightbox = this;
    return {
        // https://api.gb1.brightbox.com/1.0/#cloud_ip_list_cloud_ips
        list: function (opt_opts, opt_callback) {
            Brightbox.request({
                method: "GET"
              , url: "/1.0/cloud_ips"
              , opts: opt_opts
            }, opt_callback);
        }
        // https://api.gb1.brightbox.com/1.0/#cloud_ip_create_cloud_ip
      , create: function (opt_opts, opt_callback) {
            Brightbox.request({
                method: "POST"
              , url: "/1.0/cloud_ips/"
              , opts: opt_opts
              , form: opt_opts.data
            }, opt_callback);
        }
        // https://api.gb1.brightbox.com/1.0/#cloud_ip_get_cloud_ip
      , get: function (opt_opts, opt_callback) {
            Brightbox.request({
                method: "GET"
              , url: "/1.0/cloud_ips/" + opt_opts.id
              , opts: opt_opts
            }, opt_callback);
        }
        // https://api.gb1.brightbox.com/1.0/#cloud_ip_update_cloud_ip
      , update: function (opt_opts, opt_callback) {
            Brightbox.request({
                method: "PUT"
              , url: "/1.0/cloud_ips/" + opt_opts.id
              , opts: opt_opts
              , body: JSON.stringify(opt_opts.data)
            }, opt_callback);
        }
        // https://api.gb1.brightbox.com/1.0/#cloud_ip_delete_cloud_ip
      , delete: function (opt_opts, opt_callback) {
            Brightbox.request({
                method: "DELETE"
              , url: "/1.0/cloud_ips/" + opt_opts.id
              , opts: opt_opts
            }, opt_callback);
        }
        // https://api.gb1.brightbox.com/1.0/#cloud_ip_map_cloud_ip
      , map: function (opt_opts, opt_callback) {
            Brightbox.request({
                method: "POST"
              , url: "/1.0/cloud_ips/" + opt_opts.id + "/map"
              , opts: opt_opts
              , data: opt_opts.data
            }, opt_callback);
        }
        // https://api.gb1.brightbox.com/1.0/#cloud_ip_unmap_cloud_ip
      , unmap: function (opt_opts, opt_callback) {
            Brightbox.request({
                method: "POST"
              , url: "/1.0/cloud_ips/" + opt_opts.id + "/unmap"
              , opts: opt_opts
            }, opt_callback);
        }
    };
}

module.exports = CloudIps;
