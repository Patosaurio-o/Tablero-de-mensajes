const { DataTypes } = require('sequelize');
const sql = require('../db');  

const msg = sql.define('msg', {     
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  message: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

const comment = sql.define('comment', {     
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  comment: {
    type: DataTypes.STRING,
    allowNull: false
  },
  msgID: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

msg.hasMany(comment);
comment.belongsTo(msg);

module.exports = {
  msg,
  comment
};
