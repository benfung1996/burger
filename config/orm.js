var connection = require("../config/connection.js");

function questionMark(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
};

function objToSql(ob) {
    var arr = [];

    for (var property in ob) {
      var value = ob[property];

      if (Object.hasOwnProperty.call(ob, property)) {
        
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }

        arr.push(property + "=" + value);
      }
    }
    return arr.toString();
};

var orm = {
    selectAll: function(table, res) {
        var query = "SELECT * FROM " + table + ";";
        connection.query(query, function(err, result) {
            if (err) {
                throw err;
            }
            res(result);
        });
    },
    insertOne: function(table, col, value, res) {
        var query = "INSERT INTO " + table;

        query += " (";
        query += col.toString();
        query += ") ";
        query += "VALUES (";
        query += questionMark(value.length);
        query += ") ";
        
        console.log(query);

        connection.query(query, value, function(err, result) {
            if (err) {
                throw err;
            }
            res(result);
        });
    },
    updateOne: function(table, object, condition, res) {
        var query = "UPDATE " + table;

        query += " SET ";
        query += objToSql(object);
        query += " WHERE ";
        query += condition;

        console.log(query);
        connection.query(query, function(err, result) {
            if (err) {
                throw err;
            }
            res(result);
        })
    }
};

module.exports = orm;