import React, { FC, useState } from "react";
import styled from "styled-components";
import { HiChevronDown } from "react-icons/hi2";


const DropdownItem = styled.div`
	width: 550px;
	margin: 100px auto;
	position: relative;
	margin-left: 100px;

	.dropdown-btn {
		padding: 15px 20px;
		background: #fff;
		font-weight: bold;
		color: #333;
		display: flex;
		align-items: center;
		justify-content: space-between;
		cursor: pointer;
		width: 80%;
		position: relative;
		span.selectedData {
			color: #899cb1;
			position: absolute;
    right: 25px;
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
	.dropdown-content {
		box-sizing: border-box;
		position: absolute;
		left: 7px;
		top: 110%;
		padding: 10px;
		background: #fff;
		box-shadow: 3px 3px 10px 6px rgba(0, 0, 0, 0.06);
		font-weight: 500;
		color: #333;
		width: 90%;
		z-index: 1;
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
`;

export const Dropdown = ({
	selected,
	setSelected,
	stateArrow,
	setArrowState,
}: any): JSX.Element => {
	const [isActive, setIsActive] = useState(false);
	console.log("isActive", isActive);
	return (
		<DropdownItem className="dropdown">
			<div
				className="dropdown-btn"
				onClick={() => {
					setIsActive(!isActive);
					setArrowState(!stateArrow);
				}}
			>
				<span className="selectedData">{selected}</span>
				<HiChevronDown className={stateArrow ? "chevron__active" : "chevron"} />
			</div>
			{!!isActive && (
				<div className="dropdown-content">
					<div
						onClick={(e: any) => {
							setSelected(e.target.textContent);
							setIsActive(false);
							setArrowState(!stateArrow);
						}}
						className="dropdown-item"
					>
						Все организации
					</div>
					<div
						onClick={(e: any) => {
							setSelected(e.target.textContent);
							setIsActive(false);
							setArrowState(!stateArrow);
						}}
						className="dropdown-item"
					>
						ИП Романов Сергей Владимирович
					</div>
					<div
						onClick={(e: any) => {
							setSelected(e.target.textContent);
							setIsActive(false);
							setArrowState(!stateArrow);
						}}
						className="dropdown-item"
					>
						ИП Жандармов Евгений Романович
					</div>
				</div>
			)}
		</DropdownItem>
	);
};




// const DropdownOwner = ({
// 	selected,
// 	setSelected,
// 	stateArrow,
// 	setArrowState,
// }: any): JSX.Element => {
// 	const [isActive, setIsActive] = useState(false);
// 	console.log("isActive", isActive);
// 	return (
// 		<DropdownItem className="dropdown">
// 			<div
// 				className="dropdown-btn"
// 				onClick={() => {
// 					setIsActive(!isActive);
// 					setArrowState(!stateArrow);
// 				}}
// 			>
// 				<span className="selectedData">{selected}</span>
// 				<HiChevronDown className={stateArrow ? "chevron__active" : "chevron"} />
// 			</div>
// 			{!!isActive && (
// 				<div className="dropdown-content">
// 					<div
// 						onClick={(e: any) => {
// 							setSelected(e.target.textContent);
// 							setIsActive(false);
// 							setArrowState(!stateArrow);
// 						}}
// 						className="dropdown-item"
// 					>
// 						Все организации
// 					</div>
// 					<div
// 						onClick={(e: any) => {
// 							setSelected(e.target.textContent);
// 							setIsActive(false);
// 							setArrowState(!stateArrow);
// 						}}
// 						className="dropdown-item"
// 					>
// 						ИП Романов Сергей Владимирович
// 					</div>
// 					<div
// 						onClick={(e: any) => {
// 							setSelected(e.target.textContent);
// 							setIsActive(false);
// 							setArrowState(!stateArrow);
// 						}}
// 						className="dropdown-item"
// 					>
// 						ИП Жандармов Евгений Романович
// 					</div>
// 				</div>
// 			)}
// 		</DropdownItem>
// 	);
// };

// export default DropdownOwner;
