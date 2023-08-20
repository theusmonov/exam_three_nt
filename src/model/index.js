
import { Group } from "./group.js";
import { User } from "./user.model.js";
import { Connection } from "./connect.js";
import { Chanel } from "./chanel.js";
import { ChanelConnect } from "./chanelconnect.js";
import { Message } from "./messages.js";


User.belongsToMany(Group, {through: Connection, foreignKey: "user_id"})
Group.belongsToMany(User, {through: Connection, foreignKey: "group_id"})


User.belongsToMany(Chanel, {through: ChanelConnect, foreignKey: "user_id"})
Chanel.belongsToMany(User, {through: ChanelConnect, foreignKey: "chanel_id"})


User.belongsToMany(Group, {through: Message, foreignKey: "user_id"})
User.belongsToMany(Chanel, {through: Message, foreignKey: "user_id"})
Group.belongsToMany(User, {through: Message, foreignKey: "group_id"})
Chanel.belongsToMany(User, {through: Message, foreignKey: "channel_id"})

await User.sync({alter: true})
await Group.sync({alter: true})
await Chanel.sync({alter: true})
await Connection.sync({alter: true})
await ChanelConnect.sync({alter: true})
await Message.sync({alter: true})


export {User, Group, Connection, Chanel, ChanelConnect, Message}
