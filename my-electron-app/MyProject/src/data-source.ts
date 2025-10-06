import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "sqlite",
    //host: "localhost",
    //port: 5432,
    //username: "test",
    //password: "test",
    database: "cs2.db",
    synchronize: true,
    logging: false,
    entities: ["entity/*.ts"],
    migrations: [],
    subscribers: [],
})
