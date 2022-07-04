import { SchedulingRepository } from "@modules/schedulings/infra/mysql/repository/schedulingRepository";
import { deleteFile } from "@util/file";
import { AppError } from "@shared/errors/AppError";

class DeleteSchedulingUseCase {
    async execute(id: string) {
        const schedulingRepository = new SchedulingRepository();
        const scheduling = await schedulingRepository.findById(id);
        if (!scheduling) {
            throw new AppError("No scheduling found");
        }
        await deleteFile(`./data/images/${scheduling.imageName}`);
        await schedulingRepository.delete(id);
        
    }
}

export { DeleteSchedulingUseCase };
