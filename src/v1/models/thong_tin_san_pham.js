"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class thong_tin_san_pham extends Model {
        static associate(models) {
            thuong_hieu.hasMany(models.san_pham, { foreignKey: "ma_thuong_hieu", as: "thuong_hieu_hasmany_san_pham" });
        }
    }
    thong_tin_san_pham.init(
        {
            ma_thong_tin_san_pham: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
            },
            ma_san_pham: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'san_pham',
                    key: 'ma_san_pham',
                }
            },
            key_attribute: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            value_attribute: {
                type: DataTypes.TEXT,
                allowNull: false,
            }
        },
        {
            sequelize,
            modelName: "thong_tin_san_pham",
            tableName: "thong_tin_san_pham",
            underscored: true,
            timestamps: true,
            paranoid: false,
            freezeTableName: true,
            createdAt: "created_at",
            updatedAt: "updated_at"
        }
    );
    return thong_tin_san_pham;
};
