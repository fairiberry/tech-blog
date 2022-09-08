const sequelize = require('../config/connection');
const postjs = require('../models/post');
const postData = require('./dish-seeds.json');

const postDatabase = async () => {
  await sequelize.sync({ force: true });

  await postjs.bulkCreate(postData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

postDatabase();