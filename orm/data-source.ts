import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 8889, // 3306
    username: "root",
    password: "root",
    database: "node-typeorm-w47", // formation-node
    synchronize: true,
    logging: true,
    entities: ["orm/entity/**/*.ts"]
});