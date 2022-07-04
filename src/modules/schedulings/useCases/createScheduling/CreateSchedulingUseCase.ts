import { ICreateSchedulingDTO } from "@modules/schedulings/dtos/ICreateSchedulingDTO";
import { SchedulingRepository } from "@modules/schedulings/infra/mysql/repository/schedulingRepository";

class CreateSchedulingUseCase {
    async execute({
        title,
        slug,
        description,
        status,
        imageName
    }: ICreateSchedulingDTO): Promise<void> {
        const schedulingRepository = new SchedulingRepository();

        await schedulingRepository.create({
            title,
            slug,
            description,
            status,
            imageName
        });
    }
}

export { CreateSchedulingUseCase };

