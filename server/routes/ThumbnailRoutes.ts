
import express from 'express'
import { deleteThumbnail, generateThumbnail } from '../controllers/ThumbnailControllers.js';
import protect from '../middlewares/auth.js';


const ThumbnaiRouter = express.Router();

ThumbnaiRouter.post('/generate',protect, generateThumbnail)
ThumbnaiRouter.delete('/delete/:id',protect, deleteThumbnail)

export default ThumbnaiRouter;
