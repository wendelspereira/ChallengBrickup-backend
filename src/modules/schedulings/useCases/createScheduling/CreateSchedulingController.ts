import { Request, Response } from "express";
import { CreateSchedulingUseCase } from "./CreateSchedulingUseCase";

interface IResquest {
    id?: string;
    title: string;
    slug: string;
    description: string;
    status: "pendding" | "progress" | "done";
}

class CreateSchedulingController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { title, slug, description, status }: IResquest = JSON.parse(
            request.body.data
        );
        const { id } = request.headers;
        const imageName = request.file?.filename;

        console.log(request.file);

        const createSchedulingUseCase = new CreateSchedulingUseCase();

        await createSchedulingUseCase.execute({
            id,
            title,
            slug,
            description,
            status,
            imageName,
        });
        return response.status(201).send();
    }
}

export { CreateSchedulingController };

