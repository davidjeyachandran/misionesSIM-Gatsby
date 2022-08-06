import { Link } from 'gatsby';
import styled from 'styled-components';

export const Nav = styled.nav`
	display: flex;
	justify-content: space-between;
	max-width: 80rem;
	align-items: center;
	margin: 0 auto;
	padding: 24px 24px;
`;

export const MenuList = styled.ul`
	display: flex;
	list-style: none;
	margin: 0;
	gap: 20px;
`;

export const MenuItem = styled.li`
	display: inline-flex;
	align-items: center;
	flex-direction: row;

	a {
		border-bottom: 1.5px solid transparent;
		color: currentColor;
		text-decoration: none;

		&:hover {
			border-bottom-color: #4a90e2;
			color: #4a90e2;
		}
	}
`;

export const LogoLink = styled(Link)`
	display: flex;
	font-weight: 500;
	align-items: center;
	flex-direction: row;
	flex-shrink: 0;
	gap: 8px;

	@media (max-width: 767px) {
		& > span:last-child {
			border: 0;
			clip: rect(0, 0, 0, 0);
			height: 1px;
			margin: -1px;
			overflow: hidden;
			padding: 0;
			position: absolute;
			white-space: nowrap;
			width: 1px;
		}
	}
`;

export const Logo = styled.span`
	height: 24px;
	width: 24px;
	display: block;
	background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M8.65819 3.11441C7.95042 2.40714 6.9923 2.10309 6.06929 2.20218C8.09472 0.800518 10.5062 0.0248328 13 0C16.1826 0.00978859 19.2351 1.26423 21.5048 3.49514C22.5343 4.52464 22.5343 6.19379 21.5048 7.22329C20.4753 8.25279 18.8062 8.25279 17.7767 7.22329C16.5111 5.95406 14.7924 5.24072 13 5.24072C11.7427 5.24072 10.5217 5.59172 9.46786 6.23937C9.77466 5.16479 9.50471 3.96034 8.65819 3.11441ZM4.16312 7.61263C5.0034 8.45232 6.19653 8.72366 7.26486 8.42681C6.60093 9.48994 6.24071 10.7264 6.24071 12.0001C6.24071 13.2729 6.60043 14.5086 7.26348 15.5712C6.19167 15.2693 4.99252 15.5403 4.14946 16.384C3.43966 17.0943 3.13598 18.0567 3.23831 18.9827C1.81385 16.9467 1.02505 14.5152 1 12.0001C1.00779 9.4664 1.80445 7.01516 3.25465 4.97565C3.14003 5.91364 3.44289 6.8929 4.16312 7.61263ZM6.0405 21.791C8.067 23.2121 10.4931 23.9921 13 23.9998C16.1782 23.9681 19.2228 22.7169 21.5048 20.5046C22.1708 19.8387 22.4309 18.868 22.1871 17.9583C21.9434 17.0485 21.2328 16.3379 20.3231 16.0942C19.4133 15.8504 18.4427 16.1105 17.7767 16.7765C16.5111 18.0457 14.7924 18.7591 13 18.7591C11.7375 18.7591 10.5116 18.4052 9.45484 17.7524C9.7629 18.827 9.4939 20.0322 8.64768 20.879C7.93557 21.5916 6.96939 21.8957 6.0405 21.791ZM4.8689 3.82284C4.01801 4.67433 4.01849 6.05438 4.86998 6.90527C5.72146 7.75617 7.10152 7.75568 7.95241 6.9042C8.8033 6.05271 8.80282 4.67266 7.95133 3.82177C7.09984 2.97088 5.71979 2.97136 4.8689 3.82284ZM4.85789 20.1732C4.00641 19.3223 4.00592 17.9423 4.85682 17.0908C5.70771 16.2393 7.08776 16.2388 7.93925 17.0897C8.79073 17.9406 8.79121 19.3207 7.94032 20.1722C7.08943 21.0237 5.70938 21.0241 4.85789 20.1732Z' fill='currentColor'/%3E%3C/svg%3E%0A");
`;
