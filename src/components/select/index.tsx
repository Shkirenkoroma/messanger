import React, { FC, useState } from "react";
// import { Select, Space } from "antd";
import styled from "styled-components";
import { HiChevronDown } from "react-icons/hi2";

const Selector = styled.div`
	width: 550px;
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
	.dropdown-content {
		position: absolute;
		left: 0;
		top: 110%;
		padding: 10px;
		background: #fff;
		box-shadow: 3px 3px 10px 6px rgba(0, 0, 0, 0.06);
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
`;

export const Select = ({
	setAllItems,
	allItems,
	constants,
	stateArrow,
	setArrowState,
}: any): JSX.Element => {
	const [isActive, setIsActive] = useState(false);
   
	return (
		<Selector className="dropdown">
			<div
				className="dropdown-btn"
				onClick={() => {
					setIsActive(!isActive);
					setArrowState(!stateArrow);
				}}
			>
				<span className="selectedData">{allItems}</span>
				<HiChevronDown className={stateArrow ? "chevron__active" : "chevron"} />
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
						</div>
					))}
				</div>
			)}
		</Selector>
	);
};
