import { Router } from 'express';

import { ApiRouter } from '@/types/api.types';
import generateCodeRoute from './generate-code';
import generateMatrixRoute from './generate-matrix';

const router = Router();

// - Exercise 1 Routes
router.use(generateCodeRoute);
router.use(generateMatrixRoute);

const exerciseRoutes: ApiRouter = {
  router: router,
  url: '/api/exercise'
};

export default exerciseRoutes;
