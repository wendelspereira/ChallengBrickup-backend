import { ICreateSchedulingDTO } from "@modules/schedulings/dtos/ICreateSchedulingDTO";
import { SchedulingRepository } from "@modules/schedulings/infra/mysql/repository/schedulingRepository";
import { AppError } from "@shared/errors/AppError";
import { deleteFile } from "@util/file";

class CreateSchedulingUseCase {
    async execute({
        id,
        title,
        slug,
        description,
        status,
        imageName,
    }: ICreateSchedulingDTO): Promise<void> {
        const schedulingRepository = new SchedulingRepository();

        //Virify if scheduling is already exists 
        if (id) {
            const scheduling = await schedulingRepository.findById(id);
            if(!scheduling){
                throw new AppError("Schedulies doesn`t exists")
            }
            const filename = scheduling?.imageName;

            //Delele scheduling
            await schedulingRepository.delete(id)
            //Delele image
            await deleteFile(filename)
        }

        console.log(title, slug, description, status)

        await schedulingRepository.create({
            title,
            slug,
            description,
            status,
            imageName,
        });
    }
}

export { CreateSchedulingUseCase };

