import express from 'express';
import { UserRoutes } from '../modules/user/user.routes';
import { AuthRouter } from '../modules/auth/auth.routes';

const router = express.Router();

const moduleRoutes = [
  // ... routes
  {
    path: "/users",
    routes: UserRoutes
  },
  {
    path: "/auth",
    routes: AuthRouter
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.routes));
export default router;
