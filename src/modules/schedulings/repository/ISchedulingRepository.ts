import { ICreateSchedulingDTO } from "../dtos/ICreateSchedulingDTO";
import { IUpdateSchedulingDTO } from "../dtos/IUpdateSchedulingDTO";
import { Scheduling } from "../entities/Scheduling";


interface ISchedulingRepository {
    list: () => Promise<Scheduling[] | undefined>
    create: (data: ICreateSchedulingDTO) => Promise<any>;
    findById: (id: string) => Promise<Scheduling | undefined>;
    put: (id: string, data: IUpdateSchedulingDTO) => Promise<void>;
    delete: (id: string) => Promise<void>;
}

export { ISchedulingRepository };
