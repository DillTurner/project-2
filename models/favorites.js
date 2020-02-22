module.exports = function(sequelize, DataTypes) {
    var fav = sequelize.define("fav", {
      name: DataTypes.TEXT,
      Value_race: DataTypes.TEXT,
      Value_flavors: DataTypes.TEXT,
      Value_effects_positive: DataTypes.TEXT,
      Value_effects_negative: DataTypes.TEXT,
      Value_effects_medical: DataTypes.TEXT,
    });
    fav.findAll({
    limit: 420,
    });
    
    fav.associate = function(models){
      models.fav.belongsTo(models.user);

    };

    fav.associate = function(models){
      models.fav.hasMany(models.jane);
    };
    return fav;
  }; 