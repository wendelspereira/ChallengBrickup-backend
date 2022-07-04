import express from "express";
import { schedulingsRoutes } from "./schedulings.routes";
const routes = express();

routes.use('/schedulings', schedulingsRoutes);

export { routes };
