import { FC, useState } from "react";
import styled from "styled-components";
import { HiChevronDown } from "react-icons/hi2";

const Selector = styled.div`
	width: 550px;
	position: relative;
	.AllTypesClass {
		.dropdown-btn {
			padding: 15px 0;
			margin-left: 15px;
			font-weight: bold;
			color: #333;
			display: flex;
			align-items: center;
			justify-content: end;
			width: 80%;
			position: relative;
		}
		.dropdown-content {
			position: absolute;
			right: -2px;
			top: 42px;
			width: 205px;
			border-radius: 4px;
			background-color: #ffffff;
			padding: 10px;
			box-shadow: red;
			font-weight: 500;
			color: #333;
			z-index: 2;
			box-shadow: 0px 0px 26px rgba(233, 237, 243, 0.8);
			.dropdown-item {
				width: 91%;
				padding: 10px;
				cursor: pointer;
				transition: all 0.4s;
				text-align: start;
				color: #899cb1;
				&:hover {
					background: #deeafe;
					color: #005ff8;
				}
			}
		}
		span.selectedData {
			color: #899cb1;
			right: 0;
			cursor: pointer;
		}
		.chevron {
			position: absolute;
			right: -20px;
		}
		.chevron__active {
			transform: rotate(180deg);
			position: absolute;
			right: -20px;
		}
	}
	.AllEmployersClass {
		margin-left: 15px;
		.dropdown-btn {
			padding: 15px 0;
			margin-left: 15px;
			font-weight: bold;
			color: #333;
			display: flex;
			align-items: center;
			justify-content: end;
			width: 80%;
			position: relative;
		}
		.dropdown-content {
			position: absolute;
			right: -17px;
			top: 42px;
			width: 205px;
			border-radius: 4px;
			background-color: #ffffff;
			padding: 10px;
			box-shadow: red;
			font-weight: 500;
			color: #333;
			z-index: 2;
			box-shadow: 0px 0px 26px rgba(233, 237, 243, 0.8);
			.dropdown-item {
				width: 91%;
				padding: 10px;
				cursor: pointer;
				transition: all 0.4s;
				text-align: start;
				color: #899cb1;
				&:hover {
					background: #deeafe;
					color: #005ff8;
				}
			}
		}
		span.selectedData {
			color: #899cb1;
			right: 0;
			cursor: pointer;
		}
		.chevron {
			position: absolute;
			right: -20px;
		}
		.chevron__active {
			transform: rotate(180deg);
			position: absolute;
			right: -20px;
		}
	}
	.AllCallsClass {
		margin-left: 10px;
		.dropdown-btn {
			padding: 15px 0;
			margin-left: 15px;
			font-weight: bold;
			color: #333;
			display: flex;
			align-items: center;
			justify-content: end;
			width: 80%;
			position: relative;
		}
		.dropdown-content {
			position: absolute;
			right: -10px;
			top: 42px;
			width: 205px;
			border-radius: 4px;
			background-color: #ffffff;
			padding: 10px;
			box-shadow: red;
			font-weight: 500;
			color: #333;
			z-index: 2;
			box-shadow: 0px 0px 26px rgba(233, 237, 243, 0.8);
			.dropdown-item {
				width: 91%;
				padding: 10px;
				cursor: pointer;
				transition: all 0.4s;
				text-align: start;
				color: #899cb1;
				&:hover {
					background: #deeafe;
					color: #005ff8;
				}
			}
		}
		span.selectedData {
			color: #899cb1;
			right: 0;
			cursor: pointer;
		}
		.chevron {
			position: absolute;
			right: -20px;
		}
		.chevron__active {
			transform: rotate(180deg);
			position: absolute;
			right: -20px;
		}
	}
	.AllSourcesClass {
		margin-left: 35px;
		.dropdown-btn {
			padding: 15px 0;
			margin-left: 15px;
			font-weight: bold;
			color: #333;
			display: flex;
			align-items: center;
			justify-content: end;
			width: 80%;
			position: relative;
		}
		.dropdown-content {
			position: absolute;
			right: -40px;
			top: 42px;
			width: 205px;
			border-radius: 4px;
			background-color: #ffffff;
			padding: 10px;
			box-shadow: red;
			font-weight: 500;
			color: #333;
			z-index: 2;
			box-shadow: 0px 0px 26px rgba(233, 237, 243, 0.8);
			.dropdown-item {
				width: 91%;
				padding: 10px;
				cursor: pointer;
				transition: all 0.4s;
				text-align: start;
				color: #899cb1;
				&:hover {
					background: #deeafe;
					color: #005ff8;
				}
			}
		}
		span.selectedData {
			color: #899cb1;
			right: 0;
			cursor: pointer;
		}
		.chevron {
			position: absolute;
			right: -20px;
		}
		.chevron__active {
			transform: rotate(180deg);
			position: absolute;
			right: -20px;
		}
	}
	.AllMarkesClass {
		.dropdown-btn {
			padding: 15px 0;
			margin-left: 55px;
			font-weight: bold;
			color: #333;
			display: flex;
			align-items: center;
			justify-content: end;

			width: 80%;
			position: relative;
		}
		.dropdown-content {
			position: absolute;
			right: -40px;
			top: 42px;
			padding: 10px;
			background-color: #ffffff;
			box-shadow: red;
			font-weight: 500;
			width: 205px;
			border-radius: 4px;
			z-index: 2;
			box-shadow: 0px 0px 26px rgba(233, 237, 243, 0.8);
			.dropdown-item {
				width: 91%;
				padding: 10px;
				cursor: pointer;
				transition: all 0.4s;
				text-align: start;
				color: #899cb1;
				&:hover {
					background: #deeafe;
					color: #005ff8;
				}
			}
		}
		span.red {
		}
		span.selectedData {
			color: #899cb1;
			right: 0;
			cursor: pointer;
		}
		.chevron {
			position: absolute;
			right: -20px;
		}
		.chevron__active {
			transform: rotate(180deg);
			position: absolute;
			right: -20px;
		}
	}
	.AllMistakesClass {
		.dropdown-btn {
			padding: 15px 0;
			margin-left: 15px;
			font-weight: bold;
			color: #333;
			display: flex;
			align-items: center;
			justify-content: end;
			float: right;
			margin-right: -12px;
			width: 48%;
			position: relative;
		}

		.dropdown-content {
			position: absolute;
			right: -35px;
			top: 42px;
			width: 205px;
			border-radius: 4px;
			background-color: #ffffff;
			padding: 10px;
			box-shadow: red;
			font-weight: 500;
			color: #333;
			z-index: 2;
			box-shadow: 0px 0px 26px rgba(233, 237, 243, 0.8);
			.dropdown-item {
				width: 91%;
				padding: 10px;
				cursor: pointer;
				transition: all 0.4s;
				text-align: start;
				color: #899cb1;
				&:hover {
					background: #deeafe;
					color: #005ff8;
				}
			}
		}
		span.selectedData {
			color: #899cb1;
			right: 0;
			cursor: pointer;
		}
		.chevron {
			position: absolute;
			right: -20px;
		}
		.chevron__active {
			transform: rotate(180deg);
			position: absolute;
			right: -20px;
		}
	}
`;

export const Select: FC<any> = ({
	setAllItems,
	allItems,
	constants,
	stateArrow,
	setArrowState,
	className,
	setIn_out,
}): JSX.Element => {
	const [isActive, setIsActive] = useState(false);

	return (
		<Selector>
			<div className={className}>
				<div className="dropdown-btn">
					<span
						className="selectedData"
						onClick={() => {
							setIsActive(!isActive);
							setArrowState(!stateArrow);
						}}
					>
						{allItems}
					</span>
					<HiChevronDown
						className={stateArrow ? "chevron__active" : "chevron"}
					/>
				</div>
				{!!isActive && (
					<div className="dropdown-content">
						{constants.map((item: any) => (
							<div
								onClick={(e: any) => {
									setAllItems(e.target.textContent);
									setIsActive(false);
									setArrowState(!stateArrow);
									setIn_out(
										e.target.textContent === "Исходящие вызовы"
											? 1
											: e.target.textContent === "Входящие вызовы"
											? 0
											: "",
									);
								}}
								className="dropdown-item"
							>
								{item.label}
								<img src={item.img} alt={item.alt} />
							</div>
						))}
					</div>
				)}
			</div>
		</Selector>
	);
};
