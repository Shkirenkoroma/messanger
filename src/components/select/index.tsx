import { useState } from "react";
import styled from "styled-components";

const Selector = styled.div`
	position: relative;
	width: 40px;
	.dropdown-btn {
		width: 50px;
	}
	.selectedData {
		font-family: "SF Pro Display";
		font-style: normal;
		font-weight: 700;
		font-size: 14px;
		line-height: 16px;
		text-align: center;
		color: #005ff8;
	}
	.selectedDataRange {
		font-family: "SF Pro Display";
		font-style: normal;
		font-weight: 700;
		font-size: 10px;
		line-height: 20px;
		text-align: center;
		color: #005ff8;
	}

	.dropdown-content {
		background-color: #ffffff;
		position: absolute;
		width: 185px;
		text-align: left;
		right: -35px;
		top: 25px;
		padding: 10px 10px;
		border-radius: 5px;

		.dropdown-item {
			font-family: "SF Pro Display";
			font-style: normal;
			font-weight: 400;
			font-size: 14px;
			line-height: 28px;
			display: flex;
			align-items: center;
			color: #899cb1;
			width: 100%;
			&:hover {
				background-color: #deeafe;
				transition: ease background-color 500ms;
				color: #005ff8;
			}
		}
		.stringdate {
			font-family: "SF Pro Display";
			font-style: normal;
			font-weight: 400;
			font-size: 14px;
			line-height: 28px;
			display: flex;
			align-items: center;
			color: #122945;
		}
	}
`;

export const Select = ({
	stateDatePicker,
	setStateDatePicker,
	isActive,
	setIsActive,
	setTimeTo,
	setTimeFrom,
	timeFrom,
	timeTo,
}: any): JSX.Element => {
	return (
		<Selector style={{ width: "50px", textAlign: "center" }}>
			<div>{stateDatePicker}</div>
			{!!isActive && (
				<div
					className="dropdown-content"
					onClick={(e: any) => {
						e.stopPropagation();
					}}
				>
					<div
						onClick={(e: any) => {
							setTimeTo("");
							setTimeFrom("");
							setStateDatePicker(e.target.textContent);
							setIsActive(false);
						}}
						className="dropdown-item"
					>
						3 дня
					</div>
					<div
						onClick={(e: any) => {
							setTimeTo("");
							setTimeFrom("");
							setStateDatePicker(e.target.textContent);
							setIsActive(false);
						}}
						className="dropdown-item"
					>
						Неделя
					</div>
					<div
						onClick={(e: any) => {
							setTimeTo("");
							setTimeFrom("");
							setStateDatePicker(e.target.textContent);
							setIsActive(false);
						}}
						className="dropdown-item"
					>
						Месяц
					</div>
					<div
						onClick={(e: any) => {
							setTimeTo("");
							setTimeFrom("");
							setStateDatePicker(e.target.textContent);
							setIsActive(false);
						}}
						className="dropdown-item"
					>
						Год
					</div>
				</div>
			)}
		</Selector>
	);
};
