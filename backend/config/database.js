const server = {
  "development": {
    "username": "root",
    "password": null,
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "dialect": "postgres",
  "seederStorage": "sequelize",
  "production": {
    "use_env_variable": 'DATABASE_URL',
    "dialect": 'postgres',
    "seederStorage": 'sequelize',
  }
};
