import styled from "styled-components";
import logo from "assets/png/logo.png";
import {
	allCallsConstant,
	allEMarksConstant,
	allEmployersConstant,
	allMistakesConstant,
	allSourses,
	allTypesConstant,
	items,
} from "assets/constants";
import plus from "assets/svg/plus.svg";
import plusanother from "assets/svg/plusanother.svg";
import vector from "assets/svg/alert.svg";
import face from "assets/png/face.png";
import moment from "moment";
import "moment/locale/ru";
import { FC, useEffect, useLayoutEffect, useState } from "react";
import { getAllCalls, getRecord } from "common/api/helpers";
import { transformPhoneNumber } from "common/utils";
import incomecall from "assets/png/call.png";
import outcall from "assets/png/outcall.png";
import ReactAudioPlayer from "react-audio-player";
import basicsearch from "assets/svg/basicsearch.svg";
import { Dropdown } from "components/dropdown/imdex";
import { HiChevronDown } from "react-icons/hi2";
import exit from "assets/svg/exit.svg";
import callers from "assets/svg/callers.svg";
import mail_outline from "assets/svg/mail_outline.svg";
import avatar from "assets/png/avatar.png";
import entrance from "assets/svg/entrance.svg";
import { DatePicker } from "components/datepicker";
import leftarrow from "assets/svg/datepicker/arrow_left.svg";
import rightarrow from "assets/svg/datepicker/arrow_right.svg";
import iconcalendar from "assets/svg/datepicker/icon-calendar.svg";
import { Select } from "components/select";
import { LineWave } from "react-loader-spinner";
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
			color: #899cb1;
			font-family: "SF Pro Display";
			font-style: normal;
			font-weight: 400;
			font-size: 15px;
			line-height: 148%;
		}
		div.header__content {
			height: 65px;
			max-width: 1440px;
			background-color: #ffffff;
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
					color: #122945;
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
			div.header__content__owncabinet {
				display: flex;
				align-items: center;
				div.roomOwner {
					display: flex;
					align-items: center;
					justify-content: space-between;
					width: 25%;
					position: relative;
					.roomOwner__dashboard {
						width: 368px;
						height: 734px;
						background-color: transparent;
						border-radius: 5px;
						position: absolute;
						left: -285px;
						top: 47px;
						background-color: #ffffff;
						z-index: 2;
						box-shadow: 3px 3px 10px 6px rgb(0 0 0 / 6%);
						.roomOwner__dashboard__container {
							padding: 20px 32px;
							box-sizing: border-box;
							ul {
								padding: 0;
							}
							.roomOwner__dashboard__name {
								font-family: "SF Pro Display";
								font-style: normal;
								font-weight: 500;
								font-size: 18px;
								line-height: 124%;
								display: flex;
								justify-content: space-between;
								color: #122945;
								width: 96%;
								img.exit:hover {
									filter: hue-rotate(120deg);
									-webkit-filter: hue-rotate(120deg);
									transition: ease filter 200ms;
								}
							}
							.roomOwner__dashboard__subname {
								font-family: "SF Pro Display";
								align-items: center;
								display: flex;
								font-style: normal;
								font-weight: 400;
								font-size: 15px;
								line-height: 124%;
								color: #5e7793;
								margin-top: 6px;
								.dot {
									display: inline-block;
									border-radius: 50px;
									width: 4px;
									height: 4px;
									background-color: #5e7793;
									margin: 0 8px;
								}
							}
							.roomOwner__dashboard__mobilephone {
								font-family: "SF Pro Display";
								align-items: center;
								display: flex;
								font-style: normal;
								font-weight: 400;
								font-size: 15px;
								line-height: 124%;
								color: #5e7793;
								margin-top: 6px;
								img {
									margin-right: 12px;
								}
							}
							.roomOwner__dashboard__mail {
								font-family: "SF Pro Display";
								align-items: center;
								display: flex;
								font-style: normal;
								font-weight: 400;
								font-size: 15px;
								line-height: 124%;
								color: #5e7793;
								margin-top: 6px;
								margin-bottom: 16px;
								img {
									margin-right: 12px;
								}
							}
							hr {
								background-color: #eaf0fa;
								height: 1px;
							}
							.roomOwner__dashboard__operation {
								font-family: "SF Pro Display";
								font-style: normal;
								font-weight: 400;
								font-size: 15px;
								line-height: 124%;
								display: flex;
								align-items: center;
								color: #5e7793;
								margin-top: 16px;
							}
							.roomOwner__dashboard__logists {
								font-family: "SF Pro Display";
								font-style: normal;
								font-weight: 400;
								font-size: 15px;
								line-height: 124%;
								display: flex;
								align-items: center;
								color: #5e7793;
								margin-top: 16px;
							}
							.roomOwner__dashboard__logisticitems {
								display: flex;
								align-items: center;
								margin-top: 16px;
								font-family: "SF Pro Display";
								font-style: normal;
								font-weight: 400;
								font-size: 15px;
								line-height: 124%;
								display: flex;
								align-items: center;
								color: #005ff8;
								position: relative;
								&:hover {
									background-color: #deeafe;
									transition: ease background-color 800ms;
									color: #0000f4;
									img.entrance {
										filter: hue-rotate(160deg);
										-webkit-filter: hue-rotate(160deg);
										transition: ease filter 200ms;
									}
								}
								img {
									margin-right: 15px;
								}
								img.entrance {
									position: absolute;
									right: 0;
								}
							}
							.roomOwner__dashboard__salescontrol {
								font-family: "SF Pro Display";
								font-style: normal;
								font-weight: 400;
								font-size: 15px;
								line-height: 124%;
								display: flex;
								align-items: center;
								color: #5e7793;
								margin-top: 16px;
							}
							.roomOwner__dashboard__salescontrol-item {
								display: flex;
								align-items: center;
								display: flex;
								align-items: center;
								margin-top: 16px;
								font-family: "SF Pro Display";
								font-style: normal;
								font-weight: 400;
								font-size: 15px;
								line-height: 124%;
								display: flex;
								align-items: center;
								color: #005ff8;
								position: relative;
								img {
									margin-right: 15px;
								}
								img.entrance {
									position: absolute;
									right: 0;
								}
								&:hover {
									background-color: #deeafe;
									transition: ease background-color 800ms;
									color: #0000f4;
									img.entrance {
										filter: hue-rotate(160deg);
										-webkit-filter: hue-rotate(160deg);
										transition: ease filter 200ms;
									}
								}
							}
						}
						.roomOwner__dashboard__personal {
							display: flex;
							align-items: center;
							font-family: "SF Pro Display";
							font-style: normal;
							font-weight: 400;
							font-size: 15px;
							line-height: 124%;
							display: flex;
							align-items: center;
							color: #005ff8;
							margin-top: 10px;
							position: relative;
							&:hover {
								background-color: #deeafe;
								transition: ease background-color 800ms;
								color: #0000f4;
								img.entrance {
									filter: hue-rotate(160deg);
									-webkit-filter: hue-rotate(160deg);
									transition: ease filter 200ms;
								}
							}
							img {
								margin-right: 12px;
							}
							img.entrance {
								position: absolute;
								right: 0;
							}
						}
					}
					.roomOwner__dashboard__active {
						display: none;
					}
					.arrow {
						width: 55px;
					}
					.arrow__active {
						transform: rotate(180deg);
						width: 55px;
					}
					&:hover {
						cursor: pointer;
					}
				}
				.header__content__input {
					border-radius: 3px;
					outline: none;
					padding: 0;
					border: none;
					font-family: "SF Pro Display";
					font-style: normal;
					font-weight: 400;
					font-size: 15px;
					color: #818080;
					width: 30%;
				}
				select {
					border: none;
					-moz-appearance: none;
					-webkit-appearance: none;
					outline: none;
					font-family: "SF Pro Display";
					font-style: normal;
					font-weight: 400;
					font-size: 15px;
					line-height: 140%;
					color: #899cb1;
					margin-left: 30px;
					&:hover {
						cursor: pointer;
					}
					option.employer {
						font-family: "SF Pro Display";
						font-style: normal;
						font-weight: 400;
						font-size: 15px;
						line-height: 140%;
						color: #899cb1;
						width: 100%;
						border: none;
						-moz-appearance: none;
						-webkit-appearance: none;
					}
				}
				img.arrow__active {
					transform: rotate(180deg);
					transition: ease-out transform 400ms;
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
			background-color: #eaf0fa;
			max-width: 1440px;
			margin: 0 auto;
			display: flex;
			flex-direction: column;
			justify-content: center;
			.sortingsection__firstsettings {
				display: flex;
				justify-content: flex-end;
				margin: 20px 0 14px 0;
			}
			.sortingsection__secondsettings {
				display: flex;
				justify-content: flex-end;
				max-width: 1070px;
				margin-left: 330px;
				position: relative;
				.header__content__input {
					position: absolute;
					left: -295px;
					top: 15px;
					background-color: transparent;
					outline: none;
					border: none;
					::placeholder {
						font-family: "SF Pro Display";
						font-style: normal;
						font-weight: 400;
						font-size: 14px;
						line-height: 140%;
						color: #5e7793;
					}
				}
				.searchlogo {
					position: absolute;
					left: -330px;
				}
			}
			.sortingsection__firstsettings__content {
				max-width: 350px;
				width: 94%;
				display: flex;
				align-items: center;
				justify-content: space-between;
				display: flex;
				.datapicker {
					margin-left: 60px;
					display: flex;
					align-items: center;
					justify-content: center;
					.leftarrow {
						width: 40px;
					}
					.rightarrow {
						width: 40px;
					}
					.centericons {
						display: flex;
						align-items: center;
						justify-content: center;
						.calendaricon {
							width: 20px;
						}
					}
					&:hover {
						cursor: pointer;
					}
				}
				.sortingsection__firstsettings__balance {
					display: flex;
					align-items: center;
					width: 100%;
					justify-content: space-between;
					max-width: 150px;
					background-color: #ffffff;
					padding: 10px 12px;
					border-radius: 50px;
					&:hover {
						background-color: rgb(222, 224, 228);
						cursor: pointer;
						transition: ease background-color 700ms;
					}
					.balancestring {
						color: #899cb1;
					}
					span.price {
						font-weight: 700;
					}
					img.plusanother {
					}
					img.plusanother:hover {
						cursor: pointer;
						filter: invert(97%);
						-webkit-filter: invert(97%);
						transition: ease filter 400ms;
					}
					span.price::after {
						content: "₽";
					}
				}
			}
		}
		section.listingitems {
			max-width: 1440px;
			margin: 0 auto;
			min-height: 600px;
			height: calc(100vh - 250px);
			background-color: #ffffff;
			border-radius: 8px;
			overflow-y: scroll;
			table {
				position: relative;
				width: 100%;
				height: calc(100vh - 10px);
				border-collapse: collapse;
				.LineWaveSpinner {
					position: absolute;
					right: 565px;
					top: 285px;
					width: 150px;
				}
				thead {
					position: fixed;
					background: #ffffff;
					width: 100%;
					max-width: 1426px;
					height: 96px;
					border-bottom: 1px solid #eaf0fa;
					z-index: 1;
					tr.titlerow {
						height: 96px;
						th {
							border-bottom: none;
						}
					}
				}
				th.title {
					font-family: "SF Pro Display";
					font-style: normal;
					font-weight: 400;
					font-size: 14px;
					line-height: 100%;
					color: #899cb1;
					padding: 20px 0;
					border-bottom: 1px solid #eaf0fa;
				}
				img.kindofcall {
					margin: 0 auto;
				}
				img.avatar {
					margin: 0 auto;
				}
				tr.allcalls:hover {
					background-color: #d4dff3;
					cursor: pointer;
					transition: ease background-color 700ms;
				}
				td {
					text-align: center;
					padding: 0;
					font-family: "SF Pro Display";
					font-style: normal;
					font-weight: 400;
					font-size: 14px;
					line-height: 100%;
					color: #899cb1;
					padding: 25px 45px;
					border-bottom: 1px solid #eaf0fa;
					.audioplayer {
						width: 352px;
						height: 48px;
						background-color: red;
					}
				}
				td.ceilKindCall {
					padding: 25px 0;
					width: 98px;
				}
				td.ceilDate {
					width: 76px;
					padding: 25px 0;
					text-align: end;
				}
				td.ceilAvatar {
					width: 119px;
					padding: 25px 0;
					text-align: end;
				}
				td.ceilMobilePhone {
					text-align: end;
					width: 137px;
					padding: 25px 0;
				}
				td.ceilSource {
					width: 150px;
					padding: 25px 0;
				}
				td.errors {
					text-align: start;
					width: 163px;
					padding: 25px 0;
				}
				td.ceilPlayer {
					width: 250px;
					text-align: center;
					padding: 25px 0;
				}
				td.player {
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
				img.button__attention {
					position: relative;
					left: 8px;
				}
				&:hover {
					cursor: pointer;
					background-position: 0;
					img.button__attention {
						filter: invert(75%);
						-webkit-filter: invert(75%);
						transition: ease filter 800ms;
					}
					img.button__plus {
						filter: invert(75%);
						-webkit-filter: invert(75%);
						transition: ease filter 800ms;
					}
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

const Main: FC = (): JSX.Element => {
	const [callsArray, setCallsArray] = useState([]);
	const [filteredUsers, setFilteredUsers] = useState([]);
	const [stateArrow, setArrowState] = useState<boolean>(false);
	const [price, setPrice] = useState<number>(272);
	const [allTypes, setAllTypes] = useState<string>("Все типы");
	const [selected, setSelected] = useState<string>("Все организации");
	const [allEmployers, setAllEmployers] = useState<string>("Все сотрудники");
	const [allCalls, setAllCalls] = useState<string>("Все звонки");
	const [allSources, setAllSources] = useState<string>("Все источники");
	const [allMarkes, setAllMarkes] = useState<string>("Все оценки");
	const [allMistakes, setAllMistakes] = useState<string>("Все ошибки");
	const [stateRoom, setStateRoom] = useState<boolean>(false);
	const [stateDatePicker, setStateDatePicker] = useState<string>("Год");
	const [isActive, setIsActive] = useState<boolean>(false);
	const [date_start, setDate_start] = useState<string>("");
	const [date_end, setDate_end] = useState<string>("");
	const [in_out, setIn_out] = useState<number | null>(null);
	const [stateArrowType, setArrowStateType] = useState<boolean>(false);
	const [stateArrowEmployers, setArrowStateEmployers] =
		useState<boolean>(false);
	const [stateArrowCalls, setArrowStateCalls] = useState<boolean>(false);
	const [stateArrowSources, setArrowStateSources] = useState<boolean>(false);
	const [stateArrowMarkes, setArrowStateMarkes] = useState<boolean>(false);
	const [stateArrowMistake, setArrowStateMistake] = useState<boolean>(false);
	const [url, setUrl] = useState("");
	const [activeField, setActiveField] = useState<boolean>(false);
	const [object, setObject] = useState<any | undefined>(null);
	const [inputValue, setInputValue] = useState<string>("");

	useLayoutEffect(() => {
		setDate_start("");
		setDate_end("");
	}, []);

	useEffect(() => {
		getAllCalls(
			setCallsArray,
			date_start,
			date_end,
			in_out,
			allTypes,
			setFilteredUsers,
		);
	}, [date_start, date_end, in_out, allTypes]);

	useEffect(() => {
		if (!inputValue.length) {
			setFilteredUsers(callsArray);
		} else setFilteredUsers(getFilteredUsers());
	}, [inputValue]);

	const handleKindCall = (allTypes: any) => {
		if (allTypes === "Входящие вызовы") {
			setIn_out(1);
		} else if (allTypes === "Исходящие вызовы") {
			setIn_out(0);
		} else if (allTypes === "Все типы") {
			setIn_out(null);
		}
	};

	const getFilteredUsers = () => {
		return callsArray.filter((call: any) => {
			const userNames = call.errors;
			const searchWord = inputValue;
			const isHasMatches = userNames.some((word: string) =>
				word.startsWith(searchWord),
			);
			return isHasMatches;
		});
	};

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
							<img className="button__plus" src={plus} alt="button" />
						</button>
						<button>
							<span className="sallary">Оплата</span>
							<img className="button__attention" src={vector} alt="button" />
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
							<input
								className="header__content__input"
								type="text"
								placeholder="Поиск..."
							/>
							<img src={basicsearch} alt="searchlogo" />
							<Dropdown
								selected={selected}
								setSelected={setSelected}
								stateArrow={stateArrow}
								setArrowState={setArrowState}
							/>
							<div
								className="roomOwner"
								onClick={() => setStateRoom(!stateRoom)}
							>
								<div
									className={
										stateRoom
											? "roomOwner__dashboard"
											: "roomOwner__dashboard__active"
									}
								>
									<div className="roomOwner__dashboard__container">
										<div className="roomOwner__dashboard__name">
											<span className="fullname">Упоров Кирилл</span>
											<img className="exit" src={exit} alt="exit" />
										</div>
										<div className="roomOwner__dashboard__subname">
											Директор
											<span className="dot" />
											Санкт-Петербург
										</div>
										<div className="roomOwner__dashboard__mobilephone">
											<img src={callers} alt="phoneicon" />
											8(800)333-17-21
										</div>
										<div className="roomOwner__dashboard__mail">
											<img src={mail_outline} alt="mailicon" />
											hi@skilla.ru
										</div>
										<hr />
										<div className="roomOwner__dashboard__operation">
											Операторы
										</div>
										<ul>
											<li className="roomOwner__dashboard__personal">
												<img src={avatar} alt="avatar" />
												Мирона Батонова
												<img
													className="entrance"
													src={entrance}
													alt="entrance"
												/>
											</li>
											<li className="roomOwner__dashboard__personal">
												<img src={avatar} alt="avatar" />
												Александра Ильина
												<img
													className="entrance"
													src={entrance}
													alt="entrance"
												/>
											</li>
											<li className="roomOwner__dashboard__personal">
												<img src={avatar} alt="avatar" />
												Милана Константинопольская
												<img
													className="entrance"
													src={entrance}
													alt="entrance"
												/>
											</li>
										</ul>
										<div className="roomOwner__dashboard__logists">Логисты</div>
										<ul>
											<li className="roomOwner__dashboard__logisticitems">
												<img src={avatar} alt="avatar" />
												Александра Сизых
												<img
													className="entrance"
													src={entrance}
													alt="entrance"
												/>
											</li>
											<li className="roomOwner__dashboard__logisticitems">
												<img src={avatar} alt="avatar" />
												Ольга Алексеевна
												<img
													className="entrance"
													src={entrance}
													alt="entrance"
												/>
											</li>
											<li className="roomOwner__dashboard__logisticitems">
												<img src={avatar} alt="avatar" />
												Людмила Петровна
												<img
													className="entrance"
													src={entrance}
													alt="entrance"
												/>
											</li>
										</ul>
										<div className="roomOwner__dashboard__salescontrol">
											Бухгалтеры
										</div>
										<ul>
											<li className="roomOwner__dashboard__salescontrol-item">
												<img src={avatar} alt="avatar" />
												Полина Калинина
												<img
													className="entrance"
													src={entrance}
													alt="entrance"
												/>
											</li>
											<li className="roomOwner__dashboard__salescontrol-item">
												<img src={avatar} alt="avatar" />
												Наталья Владимировна
												<img
													className="entrance"
													src={entrance}
													alt="entrance"
												/>
											</li>
											<li className="roomOwner__dashboard__salescontrol-item">
												<img src={avatar} alt="avatar" />
												Алла Олеговна
												<img
													className="entrance"
													src={entrance}
													alt="entrance"
												/>
											</li>
										</ul>
									</div>
								</div>
								<img src={face} alt="facelogo" />
								<HiChevronDown
									className={stateRoom ? "arrow__active" : "arrow"}
								/>
							</div>
						</div>
					</div>
				</div>
				<main>
					<section className="sortingsection">
						<div className="sortingsection__firstsettings">
							<div className="sortingsection__firstsettings__content">
								<div className="sortingsection__firstsettings__balance">
									<span className="balancestring">Баланс:</span>
									<span className="price">{price}</span>
									<img
										onClick={() => setPrice(price + 1)}
										className="plusanother"
										src={plusanother}
										alt="plusanother"
									/>
								</div>
								<div
									className="datapicker"
									onClick={() => {
										setIsActive(!isActive);
									}}
								>
									<div className="leftarrow">
										<img src={leftarrow} alt="leftarrow" />
									</div>
									<div className="centericons">
										<div className="calendaricon">
											<img src={iconcalendar} alt="iconcalendar" />
										</div>
										<DatePicker
											stateDatePicker={stateDatePicker}
											setStateDatePicker={setStateDatePicker}
											isActive={isActive}
											setIsActive={setIsActive}
											setTimeFrom={setDate_start}
											setTimeTo={setDate_end}
											timeTo={date_end}
											timeFrom={date_start}
										/>
									</div>
									<div className="rightarrow">
										<img src={rightarrow} alt="rightarrow" />
									</div>
								</div>
							</div>
						</div>
						<div className="sortingsection__secondsettings">
							<input
								className="header__content__input"
								type="text"
								placeholder="Поиск по звонкам"
								value={inputValue}
								onChange={(e) => setInputValue(e.target.value)}
							/>
							<img className="searchlogo" src={basicsearch} alt="searchlogo" />
							<Select
								allItems={allTypes}
								setAllItems={setAllTypes}
								constants={allTypesConstant}
								className={"AllTypesClass"}
								stateArrow={stateArrowType}
								onClick={() => handleKindCall(allTypes)}
								setIn_out={setIn_out}
								setArrowState={setArrowStateType}
							/>
							<Select
								allItems={allEmployers}
								setAllItems={setAllEmployers}
								constants={allEmployersConstant}
								className={"AllEmployersClass"}
								stateArrow={stateArrowEmployers}
								setArrowState={setArrowStateEmployers}
							/>
							<Select
								allItems={allCalls}
								setAllItems={setAllCalls}
								constants={allCallsConstant}
								className={"AllCallsClass"}
								stateArrow={stateArrowCalls}
								setArrowState={setArrowStateCalls}
							/>
							<Select
								allItems={allSources}
								setAllItems={setAllSources}
								constants={allSourses}
								className={"AllSourcesClass"}
								stateArrow={stateArrowSources}
								setArrowState={setArrowStateSources}
							/>
							<Select
								allItems={allMistakes}
								setAllItems={setAllMistakes}
								constants={allMistakesConstant}
								className={"AllMistakesClass"}
								stateArrow={stateArrowMistake}
								setArrowState={setArrowStateMistake}
							/>
							<Select
								allItems={allMarkes}
								setAllItems={setAllMarkes}
								constants={allEMarksConstant}
								className={"AllMarkesClass"}
								stateArrow={stateArrowMarkes}
								setArrowState={setArrowStateMarkes}
							/>
						</div>
					</section>
					<section className="listingitems">
						<table>
							<thead>
								<tr className="titlerow">
									<th className="title" style={{ padding: "0 60px" }}>
										Тип
									</th>
									<th className="title" style={{ padding: "0 60px" }}>
										Время
									</th>
									<th className="title" style={{ padding: "0 60px" }}>
										Сотрудник
									</th>
									<th className="title" style={{ padding: "0 60px" }}>
										Звонок
									</th>
									<th className="title" style={{ padding: "0 0 0 60px" }}>
										Источник
									</th>
									<th className="title" style={{ padding: "0 0 0 110px" }}>
										Оценка
									</th>
									<th className="title" style={{ padding: "0 0 0 280px" }}>
										Длительность
									</th>
								</tr>
							</thead>
							{filteredUsers.length ? (
								filteredUsers.map((call: any) => (
									<tr
										className="allcalls"
										key={call.id}
										onClick={() => {
											setObject(call);
											if (!!call.time) {
												setActiveField(!activeField);
											}
											getRecord(call.record, call.partnership_id, setUrl);
										}}
										onMouseLeave={() => setActiveField(false)}
									>
										<td className="ceilKindCall">
											{call.in_out ? (
												<img
													className="kindofcall"
													src={outcall}
													alt="outcomecall"
												/>
											) : (
												<img
													className="kindofcall"
													src={incomecall}
													alt="incomecall"
												/>
											)}
										</td>
										<td className="ceilDate">{call.date.split(" ")[1]}</td>
										<td className="ceilAvatar">
											<img className="avatar" src={call.person_avatar} />
										</td>
										<td className="ceilMobilePhone">
											{transformPhoneNumber(call.partner_data.phone)}
										</td>
										<td className="ceilSource">{call.source}</td>
										<td className="errors">{call.errors}</td>
										<td className="ceilPlayer">
											{!!activeField && call.time && call == object ? (
												<ReactAudioPlayer
													id={call.id}
													src={url}
													controls
													style={{ width: "245px", height: "34px" }}
												/>
											) : (
												`${moment(call.time * 1000).format("mm:ss")}`
											)}
										</td>
									</tr>
								))
							) : (
								<LineWave
									height="200"
									width="150"
									color="#cdcdcd"
									ariaLabel="line-wave"
									wrapperClass="LineWaveSpinner"
									visible={true}
								/>
							)}
						</table>
					</section>
				</main>
			</div>
		</Container>
	);
};

export default Main;
