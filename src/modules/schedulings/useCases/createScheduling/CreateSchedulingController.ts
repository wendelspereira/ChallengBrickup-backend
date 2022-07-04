import { Request, Response } from "express";
import { CreateSchedulingUseCase } from "./CreateSchedulingUseCase";

interface IResquest {
    title: string;
    slug: string;
    description: string;
    status: string;
}

class CreateSchedulingController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { title, slug, description, status }: IResquest = JSON.parse(request.body.data);

        const imageName = request.file?.filename;

        const createSchedulingUseCase = new CreateSchedulingUseCase();

        await createSchedulingUseCase.execute({
            title,
            slug,
            description,
            status,
            imageName
        });
        return response.status(201).send();
    }
}

export { CreateSchedulingController };

