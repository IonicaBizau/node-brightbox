function Images() {
    var Brightbox = this;
    return {
        // https://api.gb1.brightbox.com/1.0/#image_list_images
        list: function (opt_opts, opt_callback) {
            Brightbox.request({
                method: "GET"
              , url: "/1.0/images"
              , opts: opt_opts
            }, opt_callback);
        }
        // https://api.gb1.brightbox.com/1.0/#image_create_image
      , create: function (opt_opts, opt_callback) {
            Brightbox.request({
                method: "POST"
              , url: "/1.0/images/"
              , opts: opt_opts
              , form: opt_opts.data
            }, opt_callback);
        }
        // https://api.gb1.brightbox.com/1.0/#image_get_image
      , get: function (opt_opts, opt_callback) {
            Brightbox.request({
                method: "GET"
              , url: "/1.0/images/" + opt_opts.id
              , opts: opt_opts
            }, opt_callback);
        }
        // https://api.gb1.brightbox.com/1.0/#image_update_image
      , update: function (opt_opts, opt_callback) {
            Brightbox.request({
                method: "PUT"
              , url: "/1.0/images/" + opt_opts.id
              , opts: opt_opts
              , body: JSON.stringify(opt_opts.data)
            }, opt_callback);
        }
        // https://api.gb1.brightbox.com/1.0/#image_delete_image
      , delete: function (opt_opts, opt_callback) {
            Brightbox.request({
                method: "DELETE"
              , url: "/1.0/images/" + opt_opts.id
              , opts: opt_opts
            }, opt_callback);
        }
        // https://api.gb1.brightbox.com/1.0/#image_lock_resource_image
      , lock_resource: function (opt_opts, opt_callback) {
            Brightbox.request({
                method: "PUT"
              , url: "/1.0/images/" + opt_opts.id + "/lock_resource"
              , opts: opt_opts
            }, opt_callback);
        }
        // https://api.gb1.brightbox.com/1.0/#image_unlock_resource_image
      , unlock_resource: function (opt_opts, opt_callback) {
            Brightbox.request({
                method: "PUT"
              , url: "/1.0/images/" + opt_opts.id + "/unlock_resource"
              , opts: opt_opts
            }, opt_callback);
        }
    };
}

module.exports = Images;
