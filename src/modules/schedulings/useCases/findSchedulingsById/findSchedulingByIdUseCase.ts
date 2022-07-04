import { SchedulingRepository } from "@modules/schedulings/infra/mysql/repository/schedulingRepository";

class FindSchedulingByIdUseCase {
    async execute(id: string) {
        const schedulingRepository = new SchedulingRepository();
        const scheduling = await schedulingRepository.findById(id);
        const file = `${__dirname}/../../../../../data/images/${scheduling?.imageName}`;
        return {
            scheduling,
            file,
        };
    }
}

export { FindSchedulingByIdUseCase };
