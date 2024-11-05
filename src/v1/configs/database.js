module.exports = {
   development: {
      username: "sa",
      password: "123",
      database: "QL_SHOP_FASHION",
      host: "LAPTOP-AU6VJ49A\\SQLEXPRESS",
      port: 1433,
      dialect: "mssql",
      pool: {
         max: 10,
         min: 0,
         idle: 10000,
      },
      dialectOptions: {
         options: {
            encrypt: true,
            trustServerCertificate: true,
         },
      },
      logging: false,
   },
   test: {
      username: "sa",
      password: "123",
      database: "QL_SHOP_FASHION",
      host: "LAPTOP-AU6VJ49A\\SQLEXPRESS",
      port: 1433,
      dialect: "mssql",
      pool: {
         max: 10,
         min: 0,
         idle: 10000,
      },
      dialectOptions: {
         options: {
            encrypt: true,
            trustServerCertificate: true,
         },
      },
      logging: false,
   },
   production: {
      username: "sa",
      password: "123",
      database: "QL_SHOP_FASHION",
      host: "LAPTOP-AU6VJ49A\\SQLEXPRESS",
      port: 1433,
      dialect: "mssql",
      pool: {
         max: 10,
         min: 0,
         idle: 10000,
      },
      dialectOptions: {
         options: {
            encrypt: true,
            trustServerCertificate: true,
         },
      },
      logging: false,
   },
};
