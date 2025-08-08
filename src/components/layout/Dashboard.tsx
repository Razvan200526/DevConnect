import BottomBar from '@/components/shared/BottomBar';
import DashboardNavBar from '@/components/shared/DashboardNavbar';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Dashboard = () => {
	return (
		<div className="min-h-dvh bg-gradient-to-br from-primary to-background">
			<DashboardNavBar />
			<div className="min-h-[calc(100dvh-5rem-5rem)] flex flex-col items-center justify-center gap-4 px-4">
				<h1 className="text-center font-cairo lg:text-5xl md:text-5xl sm:text-5xl text-primary-300">
					Join THE developer community
				</h1>
				<h2 className="text-center font-cairo lg:text-2xl md:text-2xl sm:text-2xl text-primary-300">
					We are about solving problems together!
				</h2>
				<Button className="shadow-2xl shadow-primary-950">
					<Link to="/login" className="text-light-50 font-secondary text-2xl">
						Start becoming better now
					</Link>
				</Button>
			</div>
			<BottomBar />
		</div>
	);
};

export default Dashboard;
