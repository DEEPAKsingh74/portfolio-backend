import { Request, Response, NextFunction } from 'express';
import config from '../../../config/config';
import { AppError } from './AppError';

function errorHandler(
  err: AppError,
  req: Request,
  res: Response,
  next: NextFunction
): void {

  if (config.nodeEnv === 'development') {
    console.error(err);
  } else {
    console.error(err.message);
  }

  res.json({
    status: err.statusCode,
    error: err.message,
  });
}

export { errorHandler };