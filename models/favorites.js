module.exports = function(sequelize, DataTypes) {
    var favs = sequelize.define("favs", {
      name: DataTypes.TEXT,
      Value_race: DataTypes.TEXT,
      Value_flavors: DataTypes.TEXT,
      Value_effects_positive: DataTypes.TEXT,
      Value_effects_negative: DataTypes.TEXT,
      Value_effects_medical: DataTypes.TEXT,
    });
    favs.findAll({
    limit: 420,
    });
    return favs;
  }; 