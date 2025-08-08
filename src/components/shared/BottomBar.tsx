import { Link } from 'react-router-dom';
import {
	type BottomBarProps,
	bottomBarItems,
} from '@/constants/bottomBarConstants';

const BottomBar = () => {
	return (
		<div className="absolute inset-x-0 bottom-0 w-full bg-primary-950 text-light pt-[env(safe-area-inset-top)]">
			<div className="w-full h-20 sm:h-10 md:h-20 border-t-2 border-secondary-300 absolute inset-x-0 bottom-0 bg-primary-950 flex flex-row items-center">
				<div className="flex flex-row w-full">
					<ul className="flex w-full items-center gap-4 px-5">
						{bottomBarItems.map((item: BottomBarProps) => (
							<li key={item.href} className="text-xl first:mr-auto">
								<Link
									to={item.href}
									className="group inline-flex items-center gap-2"
								>
									{item.image && (
										<img
											src={item.image}
											alt=""
											className="h-12 w-12 shrink-0"
											aria-hidden="true"
										/>
									)}
									<span
										className={`${item.font} relative inline-block text-base sm:text-lg md:text-xl text-dark-600
            bg-[linear-gradient(var(--color-secondary-300),var(--color-secondary-300))]
            bg-[length:0%_2px] bg-no-repeat bg-[position:50%_100%]
            transition-[background-size] duration-300 ease-out
            hover:bg-[length:100%_2px]
          `}
									>
										{item.text}
									</span>
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default BottomBar;
