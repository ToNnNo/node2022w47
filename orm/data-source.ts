import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 8889, // 3306
    username: "root",
    password: "root",
    database: "node-typeorm-w47", // formation-node
    synchronize: false, // Empeche la synchronisation automatique des tables; use npm run typeorm:sync
    logging: true,
    entities: ["orm/entity/**/*.ts"]
});