import { createBrowserRouter } from 'react-router-dom';
import Dashboard from '@/components/layout/Dashboard';
import Login from '@/components/login/Login';

export const router = createBrowserRouter([
	{
		path: '/login',
		Component: Login,
	},
	{
		path: '/',
		Component: Dashboard,
		children: [],
	},
]);
