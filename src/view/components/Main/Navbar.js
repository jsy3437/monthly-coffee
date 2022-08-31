import React from 'react';
import styled from 'styled-components';
import shoppingBagImg from '../../../images/icon-shopping-bag.svg';

const Navbar = () => {
	return (
		<NavberWarp>
			<NavbarLine>
				<DesktopNavbar>
					<LogoBox>
						<Logo>Monthly Coffee</Logo>
					</LogoBox>
					<MenuLeft>
						<Menu>
							<MenuLink>시작하기</MenuLink>
						</Menu>
						<Menu>
							<MenuLink>파트너 카페</MenuLink>
						</Menu>
						<Menu>
							<MenuLink>공지사항</MenuLink>
						</Menu>
						<Menu>
							<MenuLink>SNS</MenuLink>
						</Menu>
					</MenuLeft>
					<MenuRight>
						<Menu>
							<Member>로그인</Member>
						</Menu>
						<Menu>
							<Member>회원가입</Member>
						</Menu>
						<Menu>
							<Cart alt="쇼핑백" src={shoppingBagImg} />
						</Menu>
					</MenuRight>
				</DesktopNavbar>
			</NavbarLine>
			<CommonNavbar>
				<DeliveryGuide>
					지금 주문하면 <DeliveryGuidePoint>9월 5일</DeliveryGuidePoint> 발송
					<DeliveryGuidePoint> &nbsp;• &nbsp;무료배송</DeliveryGuidePoint>
				</DeliveryGuide>
			</CommonNavbar>
		</NavberWarp>
	);
};

export default Navbar;

const NavberWarp = styled.div`
	width: 100vw;
	height: 103px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	color: #707070;
	margin-top: -0.5rem;
`;
const NavbarLine = styled.div`
	width: 100%;
	border-bottom: 1px solid #e5e7eb;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
const DesktopNavbar = styled.div`
	width: 100%;
	max-width: 1180px;
	height: 71px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 10px;
`;
const LogoBox = styled.div`
	width: fit-content;
`;
const Logo = styled.a`
	font-family: 'mon-b';
	font-weight: bold;
	font-size: 26px;
`;
const MenuLeft = styled.ul`
	max-width: 360px;
	display: flex;
	justify-content: space-between;
`;
const Menu = styled.li`
	display: inline-block;
`;
const MenuLink = styled.a`
	padding: 0 20px;
	font-size: 13px;
`;
const Member = styled(MenuLink)`
	padding: 0 0.5rem;
`;
const MenuRight = styled(MenuLeft)`
	max-width: 250px;
`;
const CommonNavbar = styled.div`
	width: 100%;
	display: flex;
	margin: 0.5rem 0;
`;
const DeliveryGuide = styled.a`
	margin: auto;
	font-size: 14px;
`;
const Cart = styled.img`
	width: 1.5rem;
	margin: 0 1.8rem 0 0.6rem;
	margin-right: 1.8rem;
`;
const DeliveryGuidePoint = styled.span`
	font-weight: bold;
`;
