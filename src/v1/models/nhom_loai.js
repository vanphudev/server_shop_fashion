"use strict";
const {Model} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
   class nhom_loai extends Model {
      static associate(models) {}
   }
   nhom_loai.init(
      {},
      {
         sequelize,
         modelName: "nhom_loai",
      }
   );
   return nhom_loai;
};
