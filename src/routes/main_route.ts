import { Prisma, PrismaClient } from "@prisma/client"
import express from "express"
import UserService from "../services/user_service";
import MainController from "../controllers/main_controller";

const mainRoute = express.Router()

//1 ================  Instances  =================

const prisma = new PrismaClient();
const mainController = new MainController(new UserService(prisma));

mainRoute.get("/health-check", (req, res) => {
	res.status(200).json({
		message: "running..."
	})
})

//1 get user data, social links
mainRoute.get("/user", mainController.getUserData.bind(mainController) as express.RequestHandler);



//1 get the skills - home
mainRoute.get("/skills", mainController.getUserSkills.bind(mainController) as express.RequestHandler);


//1 get all the certificates - certificate
mainRoute.get("/certificates", mainController.getUserCertificates.bind(mainController) as express.RequestHandler);


//1 get skills and education - resume
mainRoute.get("/resume", mainController.getUserResume.bind(mainController) as express.RequestHandler);


//1 get all the projects - projects
mainRoute.get("/project", mainController.getUserProjects.bind(mainController) as express.RequestHandler);


//1 get aboutme, workdomain, skills - about
mainRoute.get("/about", mainController.getUserAbout.bind(mainController) as express.RequestHandler);


export default mainRoute;