const Sequelize = require('sequelize');

const sql = new Sequelize('msg_user', 'root', 'MySQL1234', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sql;
/*
const Msg = sql.define('Msg', {     
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  message: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

const Comment = sql.define('Comment', {     
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  comment: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

Msg.hasMany(Comment);
Comment.belongsTo(Msg);

sql.sync()
.then(() => {
  console.log('error 404 Data Base not found')
});

module.exports = {
  Msg,
  Comment
};
*/
