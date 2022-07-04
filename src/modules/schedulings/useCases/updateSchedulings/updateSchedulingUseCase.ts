import { IUpdateSchedulingDTO } from "@modules/schedulings/dtos/IUpdateSchedulingDTO";
import { SchedulingRepository } from "@modules/schedulings/infra/mysql/repository/schedulingRepository";

class UpdateSchedulingsUseCase {
    async execute(id: string, data: IUpdateSchedulingDTO): Promise<void> {
        const schedulingRepository = new SchedulingRepository();
        await schedulingRepository.put(id, data);
    }
}

export { UpdateSchedulingsUseCase };
