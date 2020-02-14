module.exports = function(sequelize, DataTypes) {
    var jane = sequelize.define("jane", {
      name: DataTypes.TEXT,
      ocpc: DataTypes.TEXT,
      qr: DataTypes.TEXT,
      url: DataTypes.TEXT,
      image: DataTypes.TEXT,
    });
    return jane;
  }; 
