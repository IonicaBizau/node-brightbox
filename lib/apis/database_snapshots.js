function DatabaseSnapshots() {
    var Brightbox = this;
    return {
        // https://api.gb1.brightbox.com/1.0/#database_snapshot_list_database_snapshots
        list: function (opt_opts, opt_callback) {
            Brightbox.request({
                method: "GET"
              , url: "/1.0/database_snapshots"
              , opts: opt_opts
            }, opt_callback);
        }
        // https://api.gb1.brightbox.com/1.0/#database_snapshot_get_database_snapshot
      , get: function (opt_opts, opt_callback) {
            Brightbox.request({
                method: "GET"
              , url: "/1.0/database_snapshots/" + opt_opts.id
              , opts: opt_opts
            }, opt_callback);
        }
        // https://api.gb1.brightbox.com/1.0/#database_snapshot_update_database_snapshot
      , update: function (opt_opts, opt_callback) {
            Brightbox.request({
                method: "PUT"
              , url: "/1.0/database_snapshots/" + opt_opts.id
              , opts: opt_opts
              , body: JSON.stringify(opt_opts.data)
            }, opt_callback);
        }
        // https://api.gb1.brightbox.com/1.0/#database_snapshot_delete_database_snapshot
      , delete: function (opt_opts, opt_callback) {
            Brightbox.request({
                method: "DELETE"
              , url: "/1.0/database_snapshots/" + opt_opts.id
              , opts: opt_opts
            }, opt_callback);
        }
        // https://api.gb1.brightbox.com/1.0/#database_snapshot_lock_resource_database_snapshot
      , lock_resource: function (opt_opts, opt_callback) {
            Brightbox.request({
                method: "PUT"
              , url: "/1.0/database_snapshots/" + opt_opts.id + "/lock_resource"
              , opts: opt_opts
            }, opt_callback);
        }
        // https://api.gb1.brightbox.com/1.0/#database_snapshot_unlock_resource_database_snapshot
      , unlock_resource: function (opt_opts, opt_callback) {
            Brightbox.request({
                method: "PUT"
              , url: "/1.0/database_snapshots/" + opt_opts.id + "/unlock_resource"
              , opts: opt_opts
            }, opt_callback);
        }
    };
}

module.exports = DatabaseSnapshots;
