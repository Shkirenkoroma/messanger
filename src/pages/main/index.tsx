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
import { transformPhoneNumber } from "common/utils";
import incomecall from "assets/png/call.png";
import outcall from "assets/png/outcall.png";
import ReactAudioPlayer from "react-audio-player";

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
		background-color: #eaf0fa;
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
			background-color: #ffffff;
			border-radius: 8px;
			overflow-y: scroll;

			table {
				width: 100%;
				height: calc(100vh - 10px);
				border-collapse: collapse;
				tr:hover {
					background-color: #d4dff3;
					cursor: pointer;
					transition: ease background-color 700ms;
				}
				td {
					text-align: center;
					padding: 0;
				}
				td.errors {
					color: #ea1a4f;
				}
			}
			ul {
				list-style-type: none;
				display: flex;
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
					img.icon {
						filter: opacity(100%);
						-webkit-filter: opacity(100%);
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
				.icon {
					filter: opacity(56%);
					-webkit-filter: opacity(56%);
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
				margin-left: 8px;
				background-image: linear-gradient(45deg, #cdcdcd 50%, transparent 50%);
				background-position: 100%;
				background-size: 400%;
				transition: background 500ms ease-in-out;
				img.attention {
					position: relative;
					left: 8px;
				}
				&:hover {
					cursor: pointer;
					background-position: 0;
				}
				span {
					font-family: "SF Pro Display";
					font-style: normal;
					font-weight: 500;
					font-size: 16px;
					line-height: 148%;
					color: #ffffff;
				}
				span.sallary {
					margin-left: 20px;
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
							<span className="sallary">Оплата</span>
							<img className="attention" src={vector} alt="button" />
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
								<option value="">ИП Сидорова Александра Михайловна</option>
								<option value="">ИП Сидорова Александра Михайловна</option>
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
									<td>
										{call.in_out ? (
											<img src={incomecall} alt="incomecall" />
										) : (
											<img src={outcall} alt="icon" />
										)}
									</td>
									<td>{call.date.split(" ")[1]}</td>
									<td>
										<img src={call.person_avatar} />
									</td>
									<td>{transformPhoneNumber(call.partner_data.phone)}</td>
									<td>{call.source}</td>
									<td className="errors">{call.errors}</td>
									<td>
										{moment(call.time * 1000).format("mm:ss")}
										<ReactAudioPlayer src={call.record} autoPlay controls />
									</td>
								</tr>
							))}
						</table>
					</section>
				</main>
			</div>
		</Container>
	);
};

export default Main;
