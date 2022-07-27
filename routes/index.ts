import express, { Request, Response } from 'express';
import { resize, validateImg, validateNum } from '../utilities/utilities';
import path from 'path';
import { existsSync } from 'fs';
const router = express.Router();

/* GET home page. */
router.get('/', function (req: Request, res: Response) {
  res.send('index');
});

router.get('/image', async function (req: Request, res: Response) {
  const img = req.query.img;
  const width = req.query.width;
  const height = req.query.height;

  if (existsSync(path.join(__dirname, '..', 'public', `${img}${width}${height}.jpg`))) {
    res.sendFile(`${img}${width}${height}.jpg`, { root: path.join(__dirname, '..', 'public') });
  } else {
    try {
      if (validateNum(req)) {
        throw new Error('Error! Width or height parameter is not a Number.');
      } else if (validateImg(req)) {
        throw new Error('Error! Image was not found in public directory.');
      } else {
        await resize(req);
        res.sendFile(`${img}${width}${height}.jpg`, { root: path.join(__dirname, '..', 'public') });
      }
    } catch (err) {
      console.log(err);
      res.send('Oops! Something went wrong. Please check your URL and try again.');
    }
  }
});

export default router;
