import { Request, Response } from "express";
import { ListSchedulingsUseCase } from "./listSchedulingsUseCase";

class ListSchedulingsController {
    async handle(request: Request, response: Response): Promise<Response> {
        const listSchedulingsUseCase = new ListSchedulingsUseCase();
        const res = await listSchedulingsUseCase.execute();
        return response.json(res);
    }
}

export { ListSchedulingsController };
