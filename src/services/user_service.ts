import { PrismaClient } from "@prisma/client";
import { NotFoundError } from "../utils/response_handler/error_handler/ErrorStatusHandler";

class UserService {

	private prisma: PrismaClient;

	constructor(prisma: PrismaClient) {
		this.prisma = prisma;
	}

	async getUser() {
		try {
			const users = await this.prisma.user.findMany();

			if (!users || users.length === 0) {
				throw new NotFoundError("No user found");
			}
			return users;
		} catch (error) {
			throw error;
		}
	}


	async getSocial(){
		try{
			const social = this.prisma.socialLinks.findMany();
			if(!social){
				throw new NotFoundError("no social links found");
			}

			return social;
		}catch(error){
			throw error;
		}
	}


	async getSkills(){
		try{
			const skills = this.prisma.skillGroup.findMany();

			if(!skills){
				throw new NotFoundError("Skills not found");
			}
			return skills;

		}catch(error){
			throw error;
		}
	}


	async getCertificates(){
		try{
			const certificates = this.prisma.certificate.findMany();

			if(!certificates){
				throw new NotFoundError("certificates not found");
			}

			return certificates;
		}catch(error){
			throw error;
		}
	}


	async getEducation(){
		try {
			const education = this.prisma.education.findMany();
			if(!education){
				throw new NotFoundError("education not found");
			}

			return education;
			
		} catch (error) {
			throw error;
		}
	}
	async getProjects(){
		try {
			const project = this.prisma.project.findMany();
			if(!project){
				throw new NotFoundError("Projects not found");
			}

			return project;

		} catch (error) {
			throw error;
		}
	}
	async getWorkDomain(){
		try {
			const workdomain = this.prisma.workDomain.findMany();
			if(!workdomain){
				throw new NotFoundError("workdomain not found");
			}

			return workdomain;

		} catch (error) {
			throw error;
		}
	}
}


export default UserService;