/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('inventario', {
    id_inventario: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    num_inventario: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    id_medio: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'medios',
        key: 'id_medio'
      }
    },
    estado: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    },
    valor_mn: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    deprec_mn: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    valor_div: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    deprec_div: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    fecha_nodeprecianmn: {
      type: DataTypes.DATE,
      allowNull: true
    },
    fecha_nodepreciandiv: {
      type: DataTypes.DATE,
      allowNull: true
    },
    fecha_adq: {
      type: DataTypes.DATE,
      allowNull: false
    },
    valmn_ini: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    depmn_ini: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    valdiv_ini: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    depdiv_ini: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    pais: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    modelo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    tipo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    marca: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    serie: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    tonelaje: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    potencia: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    chasis: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    motor: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    combustible: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    chapa: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    utilizacion: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    indicativo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    otros: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    fechafab: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    destino: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    tableName: 'inventario'
  });
};
