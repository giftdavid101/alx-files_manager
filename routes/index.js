/**
 * Assign handlers to routes
 */
import { Router } from 'express';
import AppController from '../controllers/AppController';
import UserController from '../controllers/UsersController';

const router = Router();

router.get('/stats', AppController.getStats);
router.get('/status', AppController.getStatus);
router.post('/users', UserController.postNew);

export default router;
