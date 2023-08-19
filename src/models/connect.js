import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database.js";


export class Connection extends Model {}

Connection.init({
    connect_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey:  true
    },
}, {
    sequelize,
    tableName: "connect_table",
    timestamps: true
})