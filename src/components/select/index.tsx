import { FC, useState } from "react";
import styled from "styled-components";
import { HiChevronDown } from "react-icons/hi2";

const Selector = styled.div`
	width: 550px;
	position: relative;
	margin-left: 100px;
	.AllTypesClass {
		.dropdown-btn {
			padding: 15px 20px;
			/* background: #fff; */
			font-weight: bold;
			color: #333;
			display: flex;
			align-items: center;
			justify-content: space-between;
			cursor: pointer;
			width: 80%;
			position: relative;
		}

		.dropdown-content {
			position: absolute;
			left: 0;
			top: 110%;
			padding: 10px;
			background-color: red;
			box-shadow: red;
			font-weight: 500;
			color: #333;
			width: 80%;
			.dropdown-item {
				width: 100%;
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
		}
		.chevron {
			position: absolute;
			right: 5px;
		}
		.chevron__active {
			transform: rotate(180deg);
			position: absolute;
			right: 5px;
		}
	}

	.AllEmployersClass {
		.dropdown-btn {
			padding: 15px 20px;
			/* background: #fff; */
			font-weight: bold;
			color: #333;
			display: flex;
			align-items: center;
			justify-content: space-between;
			cursor: pointer;
			width: 80%;
			position: relative;
		}

		.dropdown-content {
			position: absolute;
			left: 0;
			top: 110%;
			padding: 10px;
			background-color: red;
			box-shadow: red;
			font-weight: 500;
			color: #333;
			width: 80%;
			.dropdown-item {
				width: 100%;
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
		}
		.chevron {
			position: absolute;
			right: 5px;
		}
		.chevron__active {
			transform: rotate(180deg);
			position: absolute;
			right: 5px;
		}
	}
	.AllCallsClass {
		.dropdown-btn {
			padding: 15px 20px;
			/* background: #fff; */
			font-weight: bold;
			color: #333;
			display: flex;
			align-items: center;
			justify-content: space-between;
			cursor: pointer;
			width: 80%;
			position: relative;
		}

		.dropdown-content {
			position: absolute;
			left: 0;
			top: 110%;
			padding: 10px;
			background-color: red;
			box-shadow: red;
			font-weight: 500;
			color: #333;
			width: 80%;
			.dropdown-item {
				width: 100%;
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
		}
		.chevron {
			position: absolute;
			right: 5px;
		}
		.chevron__active {
			transform: rotate(180deg);
			position: absolute;
			right: 5px;
		}
	}

	.AllSourcesClass {
		.dropdown-btn {
			padding: 15px 20px;
			/* background: #fff; */
			font-weight: bold;
			color: #333;
			display: flex;
			align-items: center;
			justify-content: space-between;
			cursor: pointer;
			width: 80%;
			position: relative;
		}

		.dropdown-content {
			position: absolute;
			left: 0;
			top: 110%;
			padding: 10px;
			background-color: red;
			box-shadow: red;
			font-weight: 500;
			color: #333;
			width: 80%;
			.dropdown-item {
				width: 100%;
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
		}
		.chevron {
			position: absolute;
			right: 5px;
		}
		.chevron__active {
			transform: rotate(180deg);
			position: absolute;
			right: 5px;
		}
	}
	.AllMarkesClass {
		.dropdown-btn {
			padding: 15px 20px;
			font-weight: bold;
			color: #333;
			display: flex;
			align-items: center;
			justify-content: space-between;
			cursor: pointer;
			width: 80%;
			position: relative;
		}

		.dropdown-content {
			position: absolute;
			right: 30px;
			top: 42px;
			padding: 10px;
			background-color: #ffffff;
			box-shadow: red;
			font-weight: 500;
			width: 205px;
			border-radius: 4px;
			box-shadow: 0px 0px 26px rgba(233, 237, 243, 0.8);
			.dropdown-item {
				width: 100%;
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
		span.red{
			
		}
		span.selectedData {
			color: #899cb1;
			right: 0;
		}
		.chevron {
			position: absolute;
			right: 5px;
		}
		.chevron__active {
			transform: rotate(180deg);
			position: absolute;
			right: 5px;
		}
	}
	.AllMistakesClass {
		.dropdown-btn {
			padding: 15px 20px;
			/* background: #fff; */
			font-weight: bold;
			color: #333;
			display: flex;
			align-items: center;
			justify-content: space-between;
			cursor: pointer;
			width: 80%;
			position: relative;
		}

		.dropdown-content {
			position: absolute;
			left: 0;
			top: 110%;
			padding: 10px;
			background-color: red;
			box-shadow: red;
			font-weight: 500;
			color: #333;
			width: 80%;
			.dropdown-item {
				width: 100%;
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
		}
		.chevron {
			position: absolute;
			right: 5px;
		}
		.chevron__active {
			transform: rotate(180deg);
			position: absolute;
			right: 5px;
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
}): JSX.Element => {
	const [isActive, setIsActive] = useState(false);

	return (
		<Selector>
			<div className={className}>
				<div
					className="dropdown-btn"
					onClick={() => {
						setIsActive(!isActive);
						setArrowState(!stateArrow);
					}}
				>
					<span className="selectedData">{allItems}</span>
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
