import styled from "styled-components";
import logo from "assets/png/logo.png";
import { items } from "assets/constants";
import plus from "assets/png/plus.png";
import vector from "assets/png/Vector.png";
import face from "assets/png/img.png";
import moment from "moment";
import "moment/locale/ru";
import { useEffect, useState } from "react";
import { getAllCalls } from "common/api/helpers";

interface IItem {
	img: string;
	alt: string;
	describe: string;
}

const Container = styled.div`
	display: flex;
	width: 100%;
	div.aside {
		max-width: 240px;
		width: 100%;
		background-color: #091336;
		div.aside__container {
		}
	}
	div.main {
		width: 100%;
	}
	div.header {
		background-color: #ffffff;
		height: 65px;
		width: 100%;
		div.header__content__date {
			width: 30%;
		}
		div.header__content {
			height: 65px;
			max-width: 1440px;
			background-color: #cdcdcd;
			margin: 0 auto;
			display: flex;
			align-items: center;
			div.header__content__statistic {
				display: flex;
				max-width: 1200px;
				width: 100%;
				div.statisticitem {
					margin-right: 56px;
					width: 70%;
				}
				span.green {
					margin-left: 5px;
					color: #00a775;
				}
				span.yellow {
					margin-left: 5px;
					color: #ffb800;
				}
				span.red {
					margin-left: 5px;
					color: #ea1a4f;
				}
				div.green {
					margin-top: 13px;
					display: block;
					border-radius: 5px;
					max-width: 156px;
					width: 100%;
					height: 6px;
					background: linear-gradient(to right, #00a775 65%, #dee6f5 50%);
				}
				div.yellow {
					margin-top: 13px;
					display: block;
					border-radius: 5px;
					max-width: 156px;
					width: 100%;
					height: 6px;
					background: linear-gradient(to right, #ffb800 40%, #dee6f5 50%);
				}
				div.red {
					margin-top: 13px;
					display: block;
					border-radius: 5px;
					max-width: 156px;
					width: 100%;
					height: 6px;
					background: linear-gradient(to right, #ea1a4f 67%, #dee6f5 50%);
				}
			}
		}
	}
	main {
		background-color: blue;
		height: calc(100vh - 65px);
		width: 100%;

		section.sortingsection {
			height: 135px;
			background-color: #f1f4f9;
			max-width: 1440px;
			margin: 0 auto;
		}
		section.listingitems {
			max-width: 1440px;
			margin: 0 auto;
			min-height: 600px;
			height: 60%;
			background-color: #f1f4f9;
			ul {
				list-style-type: none;
				display: flex;
			}
			ul.AllCalls {
				display: flex;
				flex-direction: column;
				li.allcalls {
					display: flex;
					align-items: center;
				}
			}
		}
	}
	div {
		width: 100%;
		img.logo {
			margin: 20px 0 32px 12px;
		}
		div.container__content {
			margin-bottom: 64px;
			position: relative;
			div.container__content__item {
				display: flex;
				align-items: center;
				max-width: 240px;
				width: 100%;
				height: 52px;
				&:hover {
					span {
						color: #ffffff;
					}
					cursor: pointer;
					background-color: #cdcdcd;
					transition: ease background-color 700ms;
					span.cicle {
						background-color: #ffd500;
						transition: ease background-color 700ms;
					}
					span.menu__side {
						background-color: #005ff8;
						transition: ease background-color 700ms;
					}
				}
				span.menu__side {
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
					color: rgba(255, 255, 255, 0.6);
				}
				span.cicle {
					width: 8px;
					height: 8px;
					position: absolute;
					right: 22px;
					background-color: transparent;
					border-radius: 50%;
				}
			}
		}
		div.buttons {
			margin-left: 12px;
			display: flex;
			flex-direction: column;
			button {
				max-width: 200px;
				width: 100%;
				background-color: #005ff8;
				padding: 13px 24px;
				display: flex;
				align-items: center;
				justify-content: space-around;
				border-radius: 4px;
				border: none;
				margin-bottom: 32px;
				&:hover {
					cursor: pointer;
				}
				span {
					font-family: "SF Pro Display";
					font-style: normal;
					font-weight: 500;
					font-size: 16px;
					line-height: 148%;
					color: #ffffff;
				}
			}
		}
	}
`;

const Main = () => {
	const [callsArray, setCallsArray] = useState([]);

	useEffect(() => {
		getAllCalls(setCallsArray);
	}, []);
	console.log(Array.isArray(callsArray));
	console.log("callsArray", callsArray);
	return (
		<Container>
			<div className="aside">
				<div className="aside__container">
					<img className="logo" src={logo} alt="logo" />
					<div className="container__content">
						{items.map((item: IItem, index: number) => (
							<div className="container__content__item" key={index}>
								<span className="menu__side" />
								<img className="icon" src={item.img} alt={item.alt} />
								<span>{item.describe}</span>
								<span className="cicle" />
							</div>
						))}
					</div>
					<div className="buttons">
						<button>
							<span>Добавить заказ</span>
							<img src={plus} alt="button" />
						</button>
						<button>
							<span>Оплата</span>
							<img src={vector} alt="button" />
						</button>
					</div>
				</div>
			</div>
			<div className="main">
				<div className="header">
					<div className="header__content">
						<div className="header__content__date">
							{moment().locale("ru").format("LL")}
						</div>
						<div className="header__content__statistic">
							<div className="statisticitem">
								Новые звонки<span className="green">20 из 30 шт</span>
								<br />
								<div className="green" />
							</div>
							<div className="statisticitem">
								Качество разговоров<span className="yellow">40%</span>
								<div className="yellow" />
							</div>
							<div className="statisticitem">
								Конверсия в заказ<span className="red">67%</span>
								<div className="red" />
							</div>
						</div>
						<div className="header__content__owncabinet">
							<input type="text" />
							<select name="" id="">
								<option value="">ИП Сидорова Александра Михайловна</option>
								<option value=""></option>
								<option value=""></option>
							</select>
							<select name="" id="">
								<option value={face} data-img-src={face}></option>
								<option value=""></option>
								<option value=""></option>
							</select>
						</div>
					</div>
				</div>
				<main>
					<section className="sortingsection">section one</section>
					<section className="listingitems">
						<table>
							<tr>
								<th>Тип</th>
								<th>Время</th>
								<th>Сотрудник</th>
								<th>Звонок</th>
								<th>Источник</th>
								<th>Оценка</th>
								<th>Длительность</th>
							</tr>
							{callsArray.map((call: any, index) => (
								
								<tr className="allcalls" key={index}>
							<td>{call.in_out}</td>
							<td>{call.date.split(' ')[1]}</td>
							<td><img src={call.person_avatar} /></td>
							<td>{call.partner_data.phone}</td>
							<td>{call.source}</td>
							<td>{call.errors}</td>
							<td>{call.time}</td>
						</tr>
							
						))}
						</table>
						{/* <ul className="listingitems__list">
							<li className="listingitems__list__type">Тип</li>
							<li className="listingitems__list__time">Время</li>
							<li className="listingitems__list__personal">Сотрудник</li>
							<li className="listingitems__list__call">Звонок</li>
							<li className="listingitems__list__creater">Источник</li>
							<li className="listingitems__list__mark" >Оценка</li>
							<li className="listingitems__list__duration">Длительность</li>
						</ul> */}
						
					
						
					</section>
				</main>
			</div>
		</Container>
	);
};

export default Main;
