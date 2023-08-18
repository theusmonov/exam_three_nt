import { Sequelize } from "sequelize";
import "dotenv/config"


export const sequelize = new Sequelize(process.env.DB_CONNECT, {
    logging: false
})
await sequelize.sync({ alter: true })