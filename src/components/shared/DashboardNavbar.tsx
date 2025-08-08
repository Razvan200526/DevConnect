import { Link } from 'react-router-dom';
import logo from '../../../public/icons/logo.svg';

export default function DashboardNavBar() {
	return (
		<div className="sticky top-0 z-[20] w-full bg-primary-950 text-light pt-[env(safe-area-inset-top)] border-b-2 border-secondary-300">
			<div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 md:px-8 h-20 sm:h-10 md:h-20">
				<div className="flex items-center justify-center gap-3 flex-1">
					<img
						src={logo}
						alt="logo"
						className="items-start py-10 w-12 h-auto"
					/>
					<Link
						to="/"
						className="
							relative hidden sm:inline-block text-[var(--color-dark-600)] text-base md:text-xl font-title
							bg-[linear-gradient(theme(colors.amber.500),theme(colors.amber.500))]
							bg-[length:0%_2px] bg-no-repeat bg-[position:50%_100%]
							transition-[background-size] duration-300 ease-out
							hover:bg-[length:100%_2px]
						"
					>
						DevConnect
					</Link>
				</div>
				<div className="flex items-center justify-center flex-1">
					<Link
						to="/"
						className="
							relative text-base hidden sm:block md:text-xl font-secondary
							bg-[linear-gradient(theme(colors.amber.500),theme(colors.amber.500))]
							bg-[length:0%_2px] bg-no-repeat bg-[position:50%_100%]
							transition-[background-size] duration-300 ease-out
							hover:bg-[length:100%_2px]
						"
					>
						Features
					</Link>
				</div>
				<div className="flex items-center justify-center flex-1 py-10">
					<Link
						to="/login"
						className='relative inline-block text-base sm:text-lg md:text-xl font-secondary
							bg-[linear-gradient(theme(colors.amber.500),theme(colors.amber.500))]
							bg-[length:0%_2px] bg-no-repeat bg-[position:50%_100%]
							transition-[background-size] duration-300 ease-out
							hover:bg-[length:100%_2px]
						"'
					>
						Log In
					</Link>
				</div>
			</div>
		</div>
	);
}
