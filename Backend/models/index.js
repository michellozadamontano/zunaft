'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// Model Table
db.cuentas      = require('./cuentas')(sequelize,Sequelize);
db.moneda       = require('./moneda')(sequelize,Sequelize);
db.tipo_cuenta  = require('./tipo_cuenta')(sequelize,Sequelize);

//Relations

db.moneda.hasMany(db.cuentas,{foreignKey:'id_moneda'});
db.cuentas.belongsTo(db.moneda,{foreignKey:'id_moneda'});

db.tipo_cuenta.hasMany(db.cuentas, {foreignKey: 'id_tipo_cuenta'});
db.cuentas.belongsTo(db.tipo_cuenta,{foreignKey: 'id_tipo_cuenta'});

module.exports = db;
