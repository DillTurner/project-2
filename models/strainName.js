module.exports = function(sequelize, DataTypes) {
    var jane = sequelize.define("jane", {
      name: DataTypes.TEXT,
      Value_race: DataTypes.TEXT,
      Value_flavors: DataTypes.TEXT,
      Value_effects_positive: DataTypes.TEXT,
      Value_effects_negative: DataTypes.TEXT,
      Value_effects_medical: DataTypes.TEXT,
    });
    
    jane.associate = function(models){
      models.jane.belongsTo(models.fav);

    };
    return jane;
  }; 



/*Name text 
Value.name text 
Value.id int 
Value.race text 
Value.flavors text 
Value.effects.positive text 
Value.effects.negative text 
Value.effects.medical text*/