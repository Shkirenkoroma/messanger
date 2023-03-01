import { useState } from "react";
import styled from "styled-components";

const DatePickerItem = styled.div`
	position: relative;
	.dropdown-btn {
		padding: 15px 20px;
		background: transparent;
		font-weight: bold;
		color: #333;
		display: flex;
		align-items: center;
		justify-content: space-between;
		cursor: pointer;
		position: relative;
		span.selectedData {
			color: #899cb1;
		position: absolute;
      left:14px;
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
		width: 152px;
		left: -75px;
		.dropdown-item {
			max-width: 500px;
			width: 133px;
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

export const DatePicker = ({
	stateDatePicker,
	setStateDatePicker,
}: any): JSX.Element => {
	const [isActive, setIsActive] = useState(false);
	console.log("isActive", isActive);
	return (
		<DatePickerItem>
			<div
				className="dropdown-btn"
				onClick={() => {
					setIsActive(!isActive);
				}}
			>
				<span className="selectedData">{stateDatePicker}</span>
			</div>
			{!!isActive && (
				<div className="dropdown-content">
					<div
						onClick={(e: any) => {
							setStateDatePicker(e.target.textContent);
							setIsActive(false);
						}}
						className="dropdown-item"
					>
						3 дня
					</div>
					<div
						onClick={(e: any) => {
							setStateDatePicker(e.target.textContent);
							setIsActive(false);
						}}
						className="dropdown-item"
					>
						Неделя
					</div>
					<div
						onClick={(e: any) => {
							setStateDatePicker(e.target.textContent);
							setIsActive(false);
						}}
						className="dropdown-item"
					>
						Месяц
					</div>
					<div
						onClick={(e: any) => {
							setStateDatePicker(e.target.textContent);
							setIsActive(false);
						}}
						className="dropdown-item"
					>
						Год
					</div>
				</div>
			)}
		</DatePickerItem>
	);
};
