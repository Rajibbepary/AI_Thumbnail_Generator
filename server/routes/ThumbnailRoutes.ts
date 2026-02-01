
import express from 'express'
import { deleteThumbnail, generateThumbnail } from '../controllers/ThumbnailControllers.js';


const ThumbnaiRouter = express.Router();

ThumbnaiRouter.post('/generate', generateThumbnail)
ThumbnaiRouter.delete('/delete/:id', deleteThumbnail)

export default ThumbnaiRouter;
