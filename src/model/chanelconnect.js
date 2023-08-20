import { DataTypes, Model } from "sequelize";
import { User } from "./user.model.js";
import { Chanel } from "./chanel.js";
import { sequelize } from "../config/database.js";

await sequelize.sync()

export class ChanelConnect extends Model {}

ChanelConnect.init({
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
    chanel_id: {
        type : DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Chanel,
            key: "id"
        }
    }
}, {
    sequelize,
    tableName: "chanel_connect",
    timestamps: true
})

