
'use strict'

module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('users', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      required: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,

    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated_at:  DataTypes.DATE,
    deleted_at: DataTypes.DATE
  }, {
    underscored: true
});
        User.hasMany(favorites, {foreignKey:'user_id'})

        favorites.belongsTo(User, {foreignKey:'user_id'})
        
  return Users;
};