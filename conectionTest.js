const Sequelize = require('sequelize');


const sequelize = new Sequelize(
    'bank',
    'backenduser',
    'superpassword',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);

const close = async function () {
    await sequelize.close();
}
sequelize.authenticate()
    .then(() => {
        console.log('Connected successfully');
    })
    .then(() => {
        close();
    })
    .catch((err) => {
        console.error('Error connectiong to database', err);
    });

