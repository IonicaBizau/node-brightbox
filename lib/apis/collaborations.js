function Collaborations() {
    var Brightbox = this;
    return {
        // https://api.gb1.brightbox.com/1.0/#collaboration_create_collaboration
        create: function (opt_opts, opt_callback) {
            Brightbox.request({
                method: "POST"
              , url: "/1.0/collaborations/"
              , opts: opt_opts
              , form: opt_opts.data
            }, opt_callback);
        }
        // https://api.gb1.brightbox.com/1.0/#collaboration_list_collaborations
      , list: function (opt_opts, opt_callback) {
            Brightbox.request({
                method: "GET"
              , url: "/1.0/collaborations"
              , opts: opt_opts
            }, opt_callback);
        }
        // https://api.gb1.brightbox.com/1.0/#collaboration_get_collaboration
      , get: function (opt_opts, opt_callback) {
            Brightbox.request({
                method: "GET"
              , url: "/1.0/collaborations/" + opt_opts.id
              , opts: opt_opts
            }, opt_callback);
        }
        // https://api.gb1.brightbox.com/1.0/#collaboration_resend_collaboration
      , resend: function (opt_opts, opt_callback) {
            brightbox.request({
                method: "POST"
              , url: "/1.0/collaborations/" + opt_opts.id + "/resend"
              , opts: opt_opts
            }, opt_callback);
        }
        // https://api.gb1.brightbox.com/1.0/#collaboration_delete_collaboration
      , delete: function (opt_opts, opt_callback) {
            Brightbox.request({
                method: "DELETE"
              , url: "/1.0/collaborations/" + opt_opts.id
              , opts: opt_opts
            }, opt_callback);
        }
    };
}

module.exports = Collaborations;
