import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database.js";

export class Group extends Model { }

Group.init({
    book_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    avatarka: {
        type: DataTypes.TEXT
    },
    group_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    group_link: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    tableName: "group",
    timestamps: true
})
// await sequelize.sync({alter: true})