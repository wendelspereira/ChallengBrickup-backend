import { IUpdateSchedulingDTO } from "@modules/schedulings/dtos/IUpdateSchedulingDTO";
import { SchedulingRepository } from "@modules/schedulings/infra/mysql/repository/schedulingRepository";
import { deleteFile } from "@util/file";

class UpdateSchedulingsUseCase {
    async execute(id: string, data: IUpdateSchedulingDTO): Promise<void> {
        const schedulingRepository = new SchedulingRepository();
        const scheduling = await schedulingRepository.findById(id);

        if (scheduling) {
            await deleteFile(scheduling.imageName);
        }

        await schedulingRepository.put(id, data);
    }
}

export { UpdateSchedulingsUseCase };
