const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
	console.log("Start seeding...");

	await prisma.user.deleteMany();
	await prisma.certificate.deleteMany();
	await prisma.skillGroup.deleteMany();
	await prisma.education.deleteMany();
	await prisma.project.deleteMany();
	await prisma.workDomain.deleteMany();
	await prisma.socialLinks.deleteMany();

	console.log("Data cleared. Starting seeding...");

	// Seed User data
	await prisma.user.create({
		data: {
			name: "Deepak Singh Bisht",
			about: [
				"Hello, I'm Deepak Singh Bisht, a software engineer based in India. I specialize in building web applications and have experience working with both frontend and backend technologies. I am passionate about learning new technologies and building products that solve real-world problems.",
				"I am currently pursuing Bachelor's Degree in Computer Science domain and have worked on several projects as a software engineer. I am proficient in JavaScript, React, Node.js, and MongoDB, and have experience working with mobile and machine learning.",
			],
			profileUrl: "https://res.cloudinary.com/dhwgfopx0/image/upload/v1735563919/portfolio/profile.png",
			devAreas: ["Full-Stack Web", "Mobile Development", "Machine Learning"],
			email: "deepakbisht.developer@gmail.com",
			resumeLink: "https://drive.google.com/file/d/1EP2vHWdXuLC5NxE1J_XeE-uN7K_0-xif/view?usp=sharing",
			location: "Uttarakhand, India",
		},
	});

	// Seed Certificate data
	await prisma.certificate.createMany({
		data: [
			{
				name: "Cipherthon 2.0 Hackathon",
				organisation: "Cipher Schools",
				cid: "CT2_1702107",
				description: "Secured 3rd runner up position in the Cipherthon 2.0 Hackathon by building a Indian law based realtime chat application.",
				certificateUrl: "https://res.cloudinary.com/dhwgfopx0/image/upload/pg_1/v1735564147/portfolio/cipherthon.jpg",
			},
			{
				name: "React Native",
				organisation: "Meta",
				cid: "LFN6US6DFCUS",
				description: "Learned to build mobile applications using React Native and built a mobile application for a local business, along with collaboration with other developers.",
				certificateUrl: "https://res.cloudinary.com/dhwgfopx0/image/upload/pg_1/v1735564150/portfolio/mobile_app_dev.jpg",
			},
			{
				name: "Cloud Fundamentals",
				organisation: "Linkedin",
				cid: "Ab3pObbLOhkWthBDFks2ihtU3nra",
				description: "Learned the fundamentals of cloud computing, its working and integration with other real world projects.",
				certificateUrl: "https://res.cloudinary.com/dhwgfopx0/image/upload/pg_1/v1735564151/portfolio/cloud_fundamentals.jpg",
			},
			{
				name: "Data structure & algorithms with c++",
				organisation: "Cipher Schools",
				cid: "CS2023-9301",
				description: "Learned the basics of data structures and algorithms and implemented them in C++. Solved 300+ problems across coding platforms.",
				certificateUrl: "https://res.cloudinary.com/dhwgfopx0/image/upload/pg_1/v1735564148/portfolio/dsa.jpg",
			},
			{
				name: "Fundamentals of Generative AI",
				organisation: "Google",
				cid: "KK87ATLZUW9Y",
				description: "Learned the fundamentals of Generative AI.",
				certificateUrl: "https://res.cloudinary.com/dhwgfopx0/image/upload/pg_1/v1735564152/portfolio/gen%20ai.jpg",
			},
			{
				name: "Complete Machine Learning & Data Science",
				organisation: "Geeks for Geeks",
				cid: "3ebfb62bf9413cec053dd38e6030c3cf",
				description: "Learned the basics of machine learning and data science and implemented them in real world projects. Also learned about the working of neural networks and deep learning. Implemented in one of the hackathons.",
				certificateUrl: "https://res.cloudinary.com/dhwgfopx0/image/upload/pg_1/v1735564146/portfolio/data_science.jpg",
			},
			{
				name: "Project Management",
				organisation: "Infosis",
				cid: "ED25519Signature2018",
				description: "Learned the basics of project management and used this knowledge in managing the projects in the hackathons and personal projects.",
				certificateUrl: "https://res.cloudinary.com/dhwgfopx0/image/upload/pg_1/v1735564149/portfolio/project_management.jpg",
			},
		],
	});

	// Seed Skill Group data
	await prisma.skillGroup.createMany({
		data: [
			{
				groupName: "Devops",
				skills: ["Git", "Docker", "Docker-compose"],
			},
			{
				groupName: "Programming Languages",
				skills: ["JavaScript", "Python", "C++", "Java", "Kotlin", "Dart"],
			},
			{
				groupName: "Frontend",
				skills: ["React", "HTML", "CSS", "Bootstrap", "Tailwind CSS", "TypeScript", "NextJS"],
			},
			{
				groupName: "Backend",
				skills: ["Node.js", "Express", "MongoDB", "Firebase", "REST API", "Microservices"],
			},
			{
				groupName: "Mobile Development",
				skills: ["React Native", "Flutter", "Android"],
			},
			{
				groupName: "Machine Learning",
				skills: ["TensorFlow", "Keras", "Scikit-Learn", "Pandas", "Numpy"],
			},
		],
	});

	// Seed Education data
	await prisma.education.createMany({
		data: [
			{
				degree: "Bachelor of Technology",
				location: "Lovely Professional University, Punjab, India",
				specialization: "Computer Science",
				duration: "2022-2026",
				marks: 8.36,
			},
			{
				degree: "12th",
				location: "APS haldwani, Uttarakhand, India",
				specialization: "Science",
				duration: "2020-2021",
				marks: 94.6,
			},
		]
	});

	// Seed Project data
	await prisma.project.createMany({
		data: [
			{
				name: "React video player",
				description: "A simple easy to use react video player that supports static files as well as streamable api's. I have optimized it by 25% leading to 150+ more downloads.",
				projectUrl: "https://www.npmjs.com/package/react-streamify-play",
				thumbnailUrl: "https://res.cloudinary.com/dhwgfopx0/image/upload/v1735644426/streamify_hp6mr8.png",
				techStack: [
					"ReactJS",
					"NPM",
					"Problem Solving",
					"HLS",
					"MPEG-Dash",
					"Typescript",
					"Tailwind css"
				],
				duration: {
					startDate: "Nov-24",
					endDate: "Nov-24"
				},
				githubUrl: "https://github.com/DEEPAKsingh74/react-streamify-play",
				type: "WEB"
			},
			{
				name: "Reconcilation Visualizer",
				description: "React Reconcilation visualizer is a simple and easy to understand visualization tool to understand the internal working of react hot reload, with a step-by-step graphical guide.",
				projectUrl: "https://deepaksingh74.github.io/reconcilation-visualizer/",
				thumbnailUrl: "https://res.cloudinary.com/dhwgfopx0/image/upload/v1735644757/reconcilation_nqgiwa.png",
				techStack: [
					"ReactJS",
					"NPM",
					"Problem Solving",
					"Tree",
					"Tree Parsing",
					"Typescript",
					"Tailwind css"
				],
				duration: {
					startDate: "Dec-24",
					endDate: "Dec-24"
				},
				githubUrl: "https://github.com/DEEPAKsingh74/reconcilation-visualizer",
				type: "WEB"
			},
			{
				name: "Personal Portfolio",
				description: "Build a complete personal portfolio website to help recruiters get my experiences and skills in computer science domain. It provides instant lookup to all my past works.",
				projectUrl: "",
				thumbnailUrl: "https://res.cloudinary.com/dhwgfopx0/image/upload/v1735645017/portfolio_ss_d2tr8i.png",
				techStack: [
					"ReactJS",
					"NPM",
					"NextJS",
					"MongoDB",
					"Prisma ORM",
					"Web",
					"Typescript",
					"Tailwind css"
				],
				duration: {
					startDate: "Jan-24",
					endDate: "Jan-24"
				},
				githubUrl: "",
				type: "WEB"
			}
		]
	});

	// Seed Work Domain data
	await prisma.workDomain.createMany({
		data: [
			{
				name: "Hackathon",
				description: "Built a real world legal chatbot with the data trained on Indian law and constitution.",
				type: "HACKATHON",
			},
			{
				name: "Hackathon",
				description: "Built a real world doctor appointment booking system with realtime consultancy.",
				type: "HACKATHON",
			},
		]
	});

	// Seed Social Links data
	await prisma.socialLinks.createMany({
		data: [
			{
				name: "LinkedIn",
				url: "https://www.linkedin.com/in/deepakbishtsingh1604/",
			},
			{
				name: "Github",
				url: "https://github.com/DEEPAKsingh74",
			},
			{
				name: "Leetcode",
				url: "https://leetcode.com/u/burpdeepak96/",
			},
			{
				name: "Geeks For Geeks",
				url: "https://www.geeksforgeeks.org/user/burpdeepak96/",
			},
		]
	});

	console.log("Seeding finished!");
}

main()
	.catch((e) => {
		console.error("Seeding error: ", e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
