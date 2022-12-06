import { Request, Response, NextFunction } from 'express';
import HttpException from '../utils/http.exception';

function errorMiddleware(err: HttpException, _req: Request, res: Response, _next: NextFunction) {
  res.status(err.status || 500).json({ message: err.message });
}

export default errorMiddleware;
