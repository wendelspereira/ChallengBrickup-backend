import { Request, Response } from "express";
import { UpdateSchedulingsUseCase } from "./updateSchedulingUseCase";

interface IResquest {
    title: string;
    slug: string;
    description: string;
    status: "pendding" | "progress" | "done";
}

class UpdateSchedulingsController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { title, slug, description, status }: IResquest = JSON.parse(
            request.body
        );

        const { id } = request.params;
        const imageName = request.file?.filename;

        const updateSchedulingsUseCase = new UpdateSchedulingsUseCase();
        await updateSchedulingsUseCase.execute(id, {
            title,
            slug,
            description,
            status,
        });
        return response.status(201).send();
    }
}

export { UpdateSchedulingsController };
