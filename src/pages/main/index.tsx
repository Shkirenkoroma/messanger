import styled from "styled-components";
import logo from "assets/png/logo.png";
import { items } from "assets/constants";

interface IItem {
	img: string;
	alt: string;
	describe: string;
}

const Container = styled.div`
	width: 100px;
	height: 100px;
	header {
		background-color: #ffffff;
		height: 65px;
		width: 100vw;
	}
	main {
		background-color: blue;
		height: calc(100vh - 65px);
		width: 100vw;
	}
	aside {
		background-color: #091336;
		position: absolute;
		top: 0;
		left: 0;
		height: 100vh;
		max-width: 240px;
		width: 100%;
		div {
			margin-top: 20px;
			width: 100%;
			img#logo {
				margin-bottom: 32px;
				margin-left: 12px;
			}
			div#container__content {
				div#container__content__item {
					display: flex;
					align-items: center;
					max-width: 240px;
					width: 100%;
					height: 52px;
					&:hover {
						cursor: pointer;
						background-color: #cdcdcd;
						span#menu__side {
							background-color: #005ff8;
						}
					}
					span#menu__side {
						height: 50px;
						width: 3px;
						background-color: transparent;
						display: block;
						margin-right: 12px;
					}
					img {
						margin-right: 13px;
					}
					span {
						font-family: "SF Pro Display";
						font-style: normal;
						font-weight: 500;
						font-size: 16px;
						line-height: 24px;
						display: flex;
						align-items: center;
						color: #ffffff;
					}
					input {
						width: 8px;
						height: 8px;
						position: absolute;
						right: 22px;
					}
				}
			}
		}
	}
`;

const Main = () => {
	return (
		<Container>
			<header>Header</header>
			<main>
				<section>section one</section>
				<section>section two</section>
			</main>
			<aside>
				<div id="container">
					<img id="logo" src={logo} alt="logo" />
					<div id="container__content">
						{items.map((item: IItem, index: number) => (
							<div id="container__content__item" key={index}>
								<span id="menu__side" />
								<img src={item.img} alt={item.alt} />
								<span>{item.describe}</span>
								<input type="radio" />
							</div>
						))}
					</div>
					<button>Добавить заказ</button>
					<button>Оплата</button>
				</div>
			</aside>
		</Container>
	);
};

export default Main;
