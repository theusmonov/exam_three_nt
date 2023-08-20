import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database.js";
import { User } from "./user.model.js";

export class Message extends Model{}

Message.init({
   message_id: {
       type: DataTypes.INTEGER,
       autoIncrement: true,
       primaryKey: true
   },
   message: {
    type: DataTypes.STRING,
    allowNull: false
   }
}, {
    sequelize,
    tableName: "message_table",
    timestamps: true
})


await sequelize.sync({alter: true})