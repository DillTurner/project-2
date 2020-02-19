module.exports = function(sequelize, DataTypes) {
    var jane = sequelize.define("mary", {
      name: DataTypes.TEXT,
      ocpc: DataTypes.TEXT,
      qr: DataTypes.TEXT,
      url: DataTypes.TEXT,
      image: DataTypes.TEXT,
    });
    return jane;
  }; 
