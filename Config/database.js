/*archivo con credenciales para acceso a bd */

import { Sequelize } from "sequelize";

const databaseName = 'BDp1'

const database = new Sequelize(databaseName, 'bob1234', '1234', {
    host: 'DESKTOP-90QSCBC',
    port: 1433,
    dialect: 'mssql',
    encrypt:false,
});

export default database;