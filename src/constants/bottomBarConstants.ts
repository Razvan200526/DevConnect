import email from '../../public/icons/email.svg';
import github from '../../public/icons/github-logo.svg';
import logo from '../../public/icons/logo.svg';

export interface BottomBarProps {
	text?: string;
	image?: string;
	href: string;
	font?: string;
}

export const bottomBarItems: BottomBarProps[] = [
	{
		text: 'DevConnect',
		image: logo,
		href: '/',
		font: 'font-title',
	},
	{
		text: 'Privacy policy',
		href: '/',
		font: 'font-secondary',
	},
	{
		text: 'Terms and Conditions',
		href: '/',
		font: 'font-secondary',
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
