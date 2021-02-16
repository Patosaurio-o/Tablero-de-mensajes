const Sequelize = require('sequelize');

const sql = new Sequelize('msg_user', 'root', 'MySQL1234', {
  host: 'localhost',
  dialect: 'mysql'
});

const msg = sql.define('msg', {     
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

const comment = sql.define('comment', {     
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

msg.hasMany(comment);
comment.belongsTo(msg);

sql.sync()
.then(() => {
  console.log('error 404 Data Base not found')
});

module.exports = {
  msg,
  comment
};;