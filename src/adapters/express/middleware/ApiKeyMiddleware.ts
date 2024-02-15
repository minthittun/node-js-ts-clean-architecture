import { Request, Response, NextFunction } from 'express';

export const ApiKeyMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const apiKey = req.headers['api-key'];

  // Check if API key is present and valid (you may implement your own validation logic)
  if (!apiKey || apiKey !== "abd23AghQYJK8cP2aXKY4zR/YWGGZq8HsErTbfW1E7k=") {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  next();
};
