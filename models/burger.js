var orm = require("../config/orm");

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    insertOne: function(cols, value, cb) {
        orm.insertOne("burgers", cols, value, function(res) {
            cb(res);
        });
    },
    updateOne: function(object, condition, cb) {
        orm.updateOne("burgers", object, condition, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;