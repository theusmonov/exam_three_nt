import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database.js";
import { User } from "../model/user.model.js";
import { Group } from "./group.js";

export class Connection extends Model {}

Connection.init({
    connect_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    user_id: {
        type : DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: "id"
        }
    },
    group_id: {
        type : DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Group,
            key: "id"
        }
    }
}, {
    sequelize,
    tableName: "connect",
    timestamps: true
})

