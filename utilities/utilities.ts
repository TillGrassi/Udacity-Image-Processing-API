import sharp from "sharp";
import { Request } from "express";
import { existsSync } from "fs";
import path from "path";

export const resize = async (req: Request): Promise<string> => {
  const width: number = parseInt(req.query.width as string);
  const height: number = parseInt(req.query.height as string);
  
  await sharp(`public/${req.query.img}.jpg`)
  .resize(width, height)
  .toFile(`public/${req.query.img}${req.query.width}${req.query.height}.jpg`);
  return (`${req.query.img}${req.query.width}${req.query.height}.jpg`)
};

export const validateNum = (req: Request): boolean => {
  const width: unknown = parseInt(req.query.width as string);
  const height: unknown = parseInt(req.query.height as string);

  if(isNaN(width as any) || isNaN(height as any)) {
    return true
  } else { return false }
}

export const validateImg = (req: Request): boolean => {
  const img: string = req.query.img as string;

  if(existsSync(path.join(__dirname,'..', 'public',`${img}.jpg`))) {
    return false
  } else { return true }
}