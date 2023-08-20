import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database.js";

export class Group extends Model {}

Group.init({
     id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
     },
     avatarka: {
        type: DataTypes.TEXT
     },
     group_name: {
        type: DataTypes.STRING
     },
     group_link: {
       type: DataTypes.STRING,
       allowNull: false
     }
}, {
     sequelize,
     tableName: "group_table",
     timestamps: true
})

