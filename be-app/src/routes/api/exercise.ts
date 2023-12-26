import { Router } from 'express';

import { ApiRouter } from '@/types/api.types';

const router = Router();

// - Routes
router.get('/', (req, res) => {
  res.send('Hello, TypeScript with Express!');
});

const exerciseRoutes: ApiRouter = {
  router: router,
  url: '/api/exercise'
};

export default exerciseRoutes;
