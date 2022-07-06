import { ListSchedulingsController } from "@modules/schedulings/useCases/listSchedulings/listSchedulingsController";
import { CreateSchedulingController } from "../../../../modules/schedulings/useCases/createScheduling/CreateSchedulingController";
import { Router } from "express";
import multer from "multer";
import uploadConfig from "../../../../config/upload";
import { UpdateSchedulingsController } from "@modules/schedulings/useCases/updateSchedulings/updateSchedulingController";
import { deleteSchedulingController } from "@modules/schedulings/useCases/deleteScheduling/deleteSchedulingController";
import { FindSchedulingsByIdController } from "@modules/schedulings/useCases/findSchedulingsById/findSchedulingByIdController";
import { ImageSchedulingsByIdController } from "@modules/schedulings/useCases/findSchedulingsById/imageSchedulingByIdController";

const schedulingsRoutes = Router();

const uploadImage = multer(uploadConfig.upload("./data/images"));
const createSchedulingController = new CreateSchedulingController();
const listSchedulingsController = new ListSchedulingsController();
const findSchedulingByIdController = new FindSchedulingsByIdController();
const imageSchedulingsByIdController = new ImageSchedulingsByIdController();
const updateSchedulingsController = new UpdateSchedulingsController();
const deleteSchedulingsController = new deleteSchedulingController();

schedulingsRoutes.post(
    "/",
    uploadImage.single("image"),
    createSchedulingController.handle
);
schedulingsRoutes.get("/", listSchedulingsController.handle);
schedulingsRoutes.get("/:id", findSchedulingByIdController.handle);
schedulingsRoutes.get("/image/:id", imageSchedulingsByIdController.handle);
schedulingsRoutes.put("/update/:id", updateSchedulingsController.handle);
schedulingsRoutes.delete("/delete/:id", deleteSchedulingsController.handle);

export { schedulingsRoutes };

