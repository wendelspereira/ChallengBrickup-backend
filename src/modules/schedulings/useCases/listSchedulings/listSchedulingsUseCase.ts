import { SchedulingRepository } from "@modules/schedulings/infra/mysql/repository/schedulingRepository";

class ListSchedulingsUseCase {
    async execute() {
        const schedulingRepository = new SchedulingRepository();
        const res = await schedulingRepository.list();
        return res;
    }
}

export { ListSchedulingsUseCase };
