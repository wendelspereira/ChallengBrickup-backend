import "reflect-metadata";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import swaggerUi from "swagger-ui-express";
import { routes } from "@shared/infra/http/routers";
import swaggerFile from "../../../swagger.json";
import { AppError } from "@shared/errors/AppError";
import cors from "cors"
const app = express();



app.use(cors());
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(routes);
app.use(
    (err: Error, request: Request, response: Response, next: NextFunction) => {
        if (err instanceof AppError) {
            response.status(err.statusCode).json({
                message: err.message,
            });
        }

        return response.status(500).json({
            status: "Error",
            message: `Internal server Error - ${err.message}`,
        });
    }
);

app.listen(3333, () => console.log("Server is running"));

