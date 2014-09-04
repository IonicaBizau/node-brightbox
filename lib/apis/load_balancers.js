function LoadBalancers() {
    var Brightbox = this;
    return {
        // https://api.gb1.brightbox.com/1.0/#load_balancer_list_load_balancers
        list: function (opt_opts, opt_callback) {
            Brightbox.request({
                method: "GET"
              , url: "/1.0/load_balancers"
              , opts: opt_opts
            }, opt_callback);
        }
        // https://api.gb1.brightbox.com/1.0/#load_balancer_create_load_balancer
      , create: function (opt_opts, opt_callback) {
            Brightbox.request({
                method: "POST"
              , url: "/1.0/load_balancers/"
              , opts: opt_opts
              , form: opt_opts.data
            }, opt_callback);
        }
        // https://api.gb1.brightbox.com/1.0/#load_balancer_get_load_balancer
      , get: function (opt_opts, opt_callback) {
            Brightbox.request({
                method: "GET"
              , url: "/1.0/load_balancers/" + opt_opts.id
              , opts: opt_opts
            }, opt_callback);
        }
        // https://api.gb1.brightbox.com/1.0/#load_balancer_update_load_balancer
      , update: function (opt_opts, opt_callback) {
            Brightbox.request({
                method: "PUT"
              , url: "/1.0/load_balancers/" + opt_opts.id
              , opts: opt_opts
              , body: JSON.stringify(opt_opts.data)
            }, opt_callback);
        }
        // https://api.gb1.brightbox.com/1.0/#load_balancer_add_nodes_load_balancer
      , add_nodes: function (opt_opts, opt_callback) {
            Brightbox.request({
                method: "POST"
              , url: "/1.0/load_balancers/" + opt_opts.id + "/add_nodes"
              , opts: opt_opts
              , form: opt_opts.data
            }, opt_callback);
        }
        // https://api.gb1.brightbox.com/1.0/#load_balancer_remove_nodes_load_balancer
      , remove_nodes: function (opt_opts, opt_callback) {
            Brightbox.request({
                method: "POST"
              , url: "/1.0/load_balancers/" + opt_opts.id + "/remove_nodes"
              , opts: opt_opts
              , form: opt_opts.data
            }, opt_callback);
        }
        // https://api.gb1.brightbox.com/1.0/#load_balancer_add_listeners_load_balancer
      , add_listeners: function (opt_opts, opt_callback) {
            Brightbox.request({
                method: "POST"
              , url: "/1.0/load_balancers/" + opt_opts.id + "/add_listeners"
              , opts: opt_opts
              , form: opt_opts.data
            }, opt_callback);
        }
        // https://api.gb1.brightbox.com/1.0/#load_balancer_remove_listeners_load_balancer
      , remove_listeners: function (opt_opts, opt_callback) {
            Brightbox.request({
                method: "POST"
              , url: "/1.0/load_balancers/" + opt_opts.id + "/remove_listeners"
              , opts: opt_opts
              , form: opt_opts.data
            }, opt_callback);
        }
        // https://api.gb1.brightbox.com/1.0/#load_balancer_delete_load_balancer
      , delete: function (opt_opts, opt_callback) {
            Brightbox.request({
                method: "DELETE"
              , url: "/1.0/load_balancers/" + opt_opts.id
              , opts: opt_opts
            }, opt_callback);
        }
        // https://api.gb1.brightbox.com/1.0/#load_balancer_lock_resource_load_balancer
      , lock_resource: function (opt_opts, opt_callback) {
            Brightbox.request({
                method: "PUT"
              , url: "/1.0/load_balancers/" + opt_opts.id + "/lock_resource"
              , opts: opt_opts
            }, opt_callback);
        }
        // https://api.gb1.brightbox.com/1.0/#load_balancer_unlock_resource_load_balancer
      , unlock_resource: function (opt_opts, opt_callback) {
            Brightbox.request({
                method: "PUT"
              , url: "/1.0/load_balancers/" + opt_opts.id + "/unlock_resource"
              , opts: opt_opts
            }, opt_callback);
        }
    };
}

module.exports = LoadBalancers;
