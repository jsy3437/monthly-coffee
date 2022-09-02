import React from 'react';
import styled from 'styled-components';

const MainBanner = () => {
	return (
		<MainBannerWarp>
			<BannerLeft>
				<Text>
					매달 새로운 카페
					<br />
					원두 정기구독, <strong>먼슬리커피</strong>
				</Text>
				<Text add={true}>
					<TextAdd>1회 구매도 가능해요</TextAdd>
				</Text>
				<Button>먼슬리커피 시작하기</Button>
			</BannerLeft>
			<BannerRight>
				<Img src="https://cdn.imweb.me/thumbnail/20220630/842f19c1379d4.png" />
			</BannerRight>
		</MainBannerWarp>
	);
};

export default MainBanner;

const MainBannerWarp = styled.div`
	height: 45vw;
	display: flex;
	justify-content: space-around;
	align-items: flex-end;
	background-color: #f5f2e7;
	padding-bottom: 7rem;
`;
const BannerLeft = styled.div`
	width: 50%;
	color: #707070;
	display: flex;
	flex-direction: column;
`;
const Text = styled.p`
	font-size: 3rem;
	line-height: 3.7rem;
	${(props) =>
		props.add &&
		`position: relative; width:13.5rem; height: 1rem; margin:3.2rem 0 8rem; background-color:#E4E0D3; line-height:2rem`}
`;
const TextAdd = styled.span`
	font-size: 1.6rem;
	position: absolute;
	bottom: 0;
`;
const Button = styled.button`
	width: fit-content;
	border-radius: 30px;
	border: none;
	background-color: #707070;
	color: #f5f2e7;
	padding: 0.8rem 2rem;
	margin-bottom: 1rem;
	font-size: 1.6rem;
`;
const BannerRight = styled.div`
	width: 37rem;
`;
const Img = styled.img`
	width: 100%;
`;
