/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('o_invent', {
    cod_ccosto: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    fec_posteo: {
      type: DataTypes.DATE,
      allowNull: false
    },
    cta_fintur: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    imp_asient: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    ref_origin: {
      type: DataTypes.STRING(13),
      allowNull: false
    },
    ref_extern: {
      type: DataTypes.STRING(16),
      allowNull: false
    },
    observ: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'o_invent'
  });
};
