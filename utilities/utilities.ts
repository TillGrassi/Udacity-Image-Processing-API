import sharp from "sharp";
import { Request } from "express";

export const resize = async (req: Request): Promise<string> => {
  const width: number = parseInt(req.query.width as string);
  const height: number = parseInt(req.query.height as string);
  
  await sharp(`public/${req.query.img}.jpg`)
  .resize(width, height)
  .toFile(`public/${req.query.img}${req.query.width}${req.query.height}.jpg`);
  return (`${req.query.img}${req.query.width}${req.query.height}.jpg`)
};