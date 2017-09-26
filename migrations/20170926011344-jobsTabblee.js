'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db) {
  return db.createTable("jobs", {
    id: {
      type: "serial",
      primaryKey: true
    },
    title: {
      type: "string",
      notNull: true
    },
    period: {
      type: "string",
      notNull: true
    },
    description: {
      type: "string",
      notNull: true
    },
    points: {
      type: "integer",
      notNull: true
    },
    personal: {
      type: "boolean",
      notNull: true,
      defaultValue: false
    }
  });
};

exports.down = function(db) {
  return db.dropTable("jobs");
};

exports._meta = {
  "version": 1
};
