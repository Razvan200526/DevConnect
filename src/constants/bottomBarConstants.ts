import email from '../../public/icons/email.svg';
import logo from '../../public/icons/logo.svg';
import github from '../../public/icons/github-logo.svg';

export interface BottomBarProps {
	text?: string;
	image?: string;
	href: string;
}

export const bottomBarItems: BottomBarProps[] = [
	{
		text: 'DevConnect',
		image: logo,
		href: '/',
	},
	{
		text: 'Privacy policy',
		href: '/',
	},
	{
		text: 'Terms and Conditions',
		href: '/',
	},
	{
		image: email,
		href: '/',
	},
	{
		image: github,
		href: 'https://github.com/Razvan200526',
	},
];
