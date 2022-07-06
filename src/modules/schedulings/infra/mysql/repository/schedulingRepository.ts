import { ICreateSchedulingDTO } from "@modules/schedulings/dtos/ICreateSchedulingDTO";
import { Scheduling } from "@modules/schedulings/entities/Scheduling";
import { ISchedulingRepository } from "@modules/schedulings/repository/ISchedulingRepository";
import { connect } from "../../../../../shared/infra/mysql/db.config";
import { v4 as uuidv4 } from "uuid";
import { QueryError } from "mysql2";
import { AppError } from "@shared/errors/AppError";
import { IUpdateSchedulingDTO } from "@modules/schedulings/dtos/IUpdateSchedulingDTO";
import { deleteFile } from "@util/file";

class SchedulingRepository implements ISchedulingRepository {
    async list(): Promise<any> {
        const sqlQuery = "SELECT * FROM schedulings";

        const connection = await connect();
        try {
            const result = await connection.query(sqlQuery);
            return result[0];
        } catch (err) {
            throw new AppError("Error when listig schedulings");
        }
    }

    async create(data: ICreateSchedulingDTO): Promise<any> {
        const sqlQuery = "INSERT INTO schedulings SET ?";
        const connection = await connect();
        try {
            await connection.query(sqlQuery, { id: uuidv4(), ...data });
        } catch (err) {
            throw new AppError("Error when creating schedulings");
        }
    }

    async findById(id: string): Promise<Scheduling | undefined> {
        const sqlQuery = `SELECT * FROM schedulings WHERE id="${id}"`;
        const connection = await connect();
        try {
            const _result = await connection.query(sqlQuery);
            const result: any = _result[0];
            return result[0];
        } catch (err) {
            throw new AppError("Error when getting schedulings");
        }
    }

    async put(id: string, data: IUpdateSchedulingDTO): Promise<void> {
        console.log(data)
        const sqlQuery = `UPDATE schedulings SET ? WHERE id="${id}"`;
        const connection = await connect();
        try {
            await connection.query(sqlQuery, { ...data });
        } catch (err) {
            throw new AppError("Error when updating scheduling");
        }
    }

    async delete(id: string): Promise<void> {
        const sqlQuery = `DELETE FROM schedulings WHERE id="${id}"`;
        const connection = await connect();
        try {
            await connection.query(sqlQuery);
        } catch (err) {
            throw new AppError("Error when deleting schedulings");
        }
    }
}

export { SchedulingRepository };
