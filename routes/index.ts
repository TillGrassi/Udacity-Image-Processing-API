import express from 'express';
import { resize } from '../utilities/utilities';
import path from 'path';
import { existsSync } from 'fs';
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
  res.send('index');
});

router.get('/image', async function (req, res) {
  const img = req.query.img;
  const width = req.query.width;
  const height = req.query.height;
  if(existsSync(path.join(__dirname,'..', 'public',`${img}${width}${height}.jpg`))) {
    res.sendFile(`${img}${width}${height}.jpg`,{root: path.join(__dirname,'..', 'public')});
  } else {
    try{
    await resize(req);
    res.sendFile(`${img}${width}${height}.jpg`,{root: path.join(__dirname,'..', 'public')});
    } catch {
      res.send('Oops! Something went wrong. Please check your URL and try again.')
    }
  }
});

export default router;
