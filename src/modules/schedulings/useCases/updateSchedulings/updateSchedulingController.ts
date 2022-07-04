import { Request, Response } from "express";
import { UpdateSchedulingsUseCase } from "./updateSchedulingUseCase";

class UpdateSchedulingsController {
    async handle(request: Request, response: Response): Promise<Response> {
        const data = request.body;
        const { id } = request.params;

        const updateSchedulingsUseCase = new UpdateSchedulingsUseCase();
        await updateSchedulingsUseCase.execute(id, data);
        return response.status(201).send();
    }
}

export { UpdateSchedulingsController };
