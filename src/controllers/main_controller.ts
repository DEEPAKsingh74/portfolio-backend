import { NextFunction, Request, Response } from "express"
import UserService from "../services/user_service";

class MainController {

	private user: UserService;

	constructor(user: UserService){
		this.user = user
	}

	async getUserData(req: Request, res: Response, next: NextFunction) {

		try {
			//1  get user data..
			const user = await this.user.getUser();
			const {about, ...otherUserData} = user[0];

			//5 get social links...

			const social = await this.user.getSocial();


			res.status(200).json({
				message: "success",
				statusCode: 200,
				data: {
					user: otherUserData,
					social,
				}
			})
		} catch (error) {
			next(error)
		}
	}


	async getUserSkills(req: Request, res: Response, next: NextFunction){
		try{
			const skills = await this.user.getSkills();

			res.status(200).json({
				message: "success",
				statusCode: 200,
				data: {
					skills
				}
			})

		}catch(error){
			next(error);
		}
	}

	async getUserCertificates(req: Request, res: Response, next: NextFunction){
		try{

			const certificates = await this.user.getCertificates();

			res.status(200).json({
				message: "success",
				statusCode: 200,
				data: {
					certificates
				}
			})

		}catch(error){
			next(error);
		}
	}


	async getUserResume(req: Request, res: Response, next: NextFunction){
		try{
			//5 get the skills...
			const skills = await this.user.getSkills();

			//5 get education...
			const education = await this.user.getEducation();

			//5 get resume link...
			const user = await this.user.getUser();
			const {resumeLink, ...otherUser} = user[0];


			res.status(200).json({
				message:"success",
				statusCode: 200,
				data: {
					skills,
					education,
					resumeLink
				}
			})
		}catch(error){
			next(error);
		}
	}


	async getUserProjects(req: Request, res: Response, next: NextFunction){
		try{
			const projects = await this.user.getProjects();

			res.status(200).json({
				message:"success",
				statusCode: 200,
				data: {
					projects
				}
			})
		}catch(error){
			next(error);
		}
	}


	async getUserAbout(req: Request, res: Response, next: NextFunction){
		try{
			//5 user about...
			const user = await this.user.getUser();
			const {about, ...otherUserData} = user[0];

			//5 user workdomain..
			const workdomain = await this.user.getWorkDomain();

			//5 user skills..
			const skills = await this.user.getSkills();

			res.status(200).json({
				message:"success",
				statusCode: 200,
				data: {
					about,
					workdomain,
					skills
				}
			})
		}catch(error){
			next(error);
		}
	}
}


export default MainController;