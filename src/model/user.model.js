import { DataTypes, Model} from "sequelize";
import { sequelize } from "../config/database.js";

export class User extends Model { }

User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    avatarka: {
        type: DataTypes.TEXT,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    first_name: {
        type: DataTypes.STRING,
    },
    second_name: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    }
}, {
    sequelize, 
    tableName: "user_table",
    timestamps: true
})

await sequelize.sync({alter: true})
