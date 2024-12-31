import dotenv from 'dotenv';
import path from 'path';

dotenv.config({path: path.join(__dirname, '../../.env')});


interface Config {
	port: number;
	allowedOrigin?: string;
	nodeEnv?: string;
}

function getEnvValue(key: string, defaultValue?: string): string {
	const value = process.env[key] || defaultValue;
	if (!value) {
		throw new Error(`Missing environment variable ${key}`);
	}
	return value;
}

const config: Config = {
	port: parseInt(getEnvValue('PORT', '3000'), 10),
	allowedOrigin: getEnvValue('ALLOWED_ORIGIN', '*'),
	nodeEnv: getEnvValue('NODE_ENV', 'development'),
};

export default config;