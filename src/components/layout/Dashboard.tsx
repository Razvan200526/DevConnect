import BottomBar from '../shared/BottomBar';
import DashboardNavBar from '../shared/DashboardNavbar';

const Dashboard = () => {
	return (
		<div className="min-h-screen bg-gradient-to-br from-primary to-background">
			<DashboardNavBar />
			<h1 className="text-center font-cairo lg:text-5xl md:text-5xl sm:text-5xl pt-28 text-primary-300">
				Join THE developer community
			</h1>
			<h2 className="text-center font-cairo lg:text-2xl md:text-2xl sm:text-2xl p-4 text-primary-300">
				We are about solving problems together!
			</h2>
			{/* {video with the platform,ignore for now} */}
			<BottomBar />
		</div>
	);
};

export default Dashboard;
