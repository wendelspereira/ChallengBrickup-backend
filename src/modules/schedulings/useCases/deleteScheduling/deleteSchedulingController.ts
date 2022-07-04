import { Request, Response } from "express";
import { DeleteSchedulingUseCase } from "./deleteSchedulingUseCase";

class deleteSchedulingController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;
        const deleteSchedulingUseCase = new DeleteSchedulingUseCase();

        await deleteSchedulingUseCase.execute(id);

        return response.status(200).send();
    }
}

export { deleteSchedulingController };
