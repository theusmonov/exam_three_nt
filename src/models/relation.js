import { User } from "./user.model.js";
import { Group } from "./group.model.js";
import { Chanel } from "./chanel.model.js";
import { Connection } from "./connect.js";



User.belongsToMany(Group,  {through: Connection, foreignKey: "user_id", onDelete: "CASCADE"})
Group.belongsToMany(User, {through: Connection, foreignKey: "group_id", onDelete: "CASCADE"})

User.belongsToMany(Chanel, {through: Connection, foreignKey: "user_id", onDelete: "CASCADE" })
Chanel.belongsToMany(User, {through: Connection, foreignKey: "chanel_id", onDelete: "CASCADE"})




await User.sync({alter: true})
await Group.sync({alter: true})
await Chanel.sync({alter: true})
await Connection.sync({alter: true})