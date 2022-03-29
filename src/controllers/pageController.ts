import { Request, Response } from 'express';

export const home = (req: Request, res: Response) => {
  res.send('opa');
};

export const dogs = (req: Request, res: Response) => {};

export const cats = (req: Request, res: Response) => {};

export const fish = (req: Request, res: Response) => {};
