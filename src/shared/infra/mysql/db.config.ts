import mysql from "mysql2/promise" 

export async function connect() {
    const connection = await mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "123456",
        database: "brickup",
    });
    return connection;
}
