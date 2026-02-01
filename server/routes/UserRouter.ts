
import express from 'express';
import { getThumbnailbyId, getUserThumbnails } from '../controllers/UserControllers.js';

const UserRouter = express.Router();

UserRouter.get('/thumbnails', getUserThumbnails)
UserRouter.get('/thumbnail/:id', getThumbnailbyId)

export default UserRouter;