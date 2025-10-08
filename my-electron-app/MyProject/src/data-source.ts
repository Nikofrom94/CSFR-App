import "reflect-metadata"
import { DataSource } from "typeorm"
import { Ability } from "./entity/Ability"
import { AbilityCategory } from "./entity/AbilityCategory"

export const AppDataSource = new DataSource({
    type: "sqlite",
    //host: "localhost",
    //port: 5432,
    //username: "test",
    //password: "test",
    database: "cs.sqlite",
    synchronize: true,
    logging: false,
    entities: [Ability,AbilityCategory],
    migrations: [],
    subscribers: [],
})
