import { Request, Response } from "express";
import { FindSchedulingByIdUseCase } from "./findSchedulingByIdUseCase";

class ImageSchedulingsByIdController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;
        const findSchedulingsByIdUseCase = new FindSchedulingByIdUseCase();
        const { file } = await findSchedulingsByIdUseCase.execute(id);
        return response.download(file);
    }
}

export { ImageSchedulingsByIdController };
