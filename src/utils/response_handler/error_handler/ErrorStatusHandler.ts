import { AppError } from "./AppError";

class NotFoundError extends AppError {
	constructor(message: string = 'Not Found', isOperational?: boolean) {
		super(message, 404, isOperational);
	}
}

class BadRequestError extends AppError {
	constructor(message: string = 'Bad Request', isOperational?: boolean) {
		super(message, 400, isOperational);
	}
}

class UnauthorizedError extends AppError {
	constructor(message: string = 'Unauthorized', isOperational?: boolean) {
		super(message, 401, isOperational);
	}
}

class ForbiddenError extends AppError {
	constructor(message: string = 'Forbidden', isOperational?: boolean) {
		super(message, 403, isOperational);
	}
}

class ConflictError extends AppError {
	constructor(message: string = 'Conflict', isOperational?: boolean) {
		super(message, 409, isOperational);
	}
}

class InternalServerError extends AppError {
	constructor(message: string = 'Internal Server Error', isOperational?: boolean) {
		super(message, 500, isOperational);
	}
}


export { NotFoundError, BadRequestError, UnauthorizedError, ForbiddenError, ConflictError, InternalServerError };