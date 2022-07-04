import { Request, Response } from "express";
import { FindSchedulingByIdUseCase } from "./findSchedulingByIdUseCase";

class FindSchedulingsByIdController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;
        const findSchedulingsByIdUseCase = new FindSchedulingByIdUseCase();
        const { file, scheduling } = await findSchedulingsByIdUseCase.execute(
            id
        );
        
        response.json(scheduling)
        
        return response.download(file)
    }
}

export { FindSchedulingsByIdController };
