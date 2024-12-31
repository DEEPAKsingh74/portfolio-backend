class AppError extends Error {
	public readonly isOperational: boolean;

	constructor(message: string, public statusCode: number, isOperational: boolean = true) {
		super(message);
		this.statusCode = statusCode;
		this.isOperational = isOperational;
		Error.captureStackTrace(this, this.constructor);
	}

}

export { AppError };