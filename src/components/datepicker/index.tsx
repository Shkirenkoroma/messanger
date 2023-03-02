// import Datepickertofrom from "components/datepickerCustom";
import { DatePickers } from "components/datepickerCustom";
import { useState } from "react";
import styled from "styled-components";

const DatePickerItem = styled.div`
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
	}
`;

export const DatePicker = ({
	stateDatePicker,
	setStateDatePicker,
	isActive,
	setIsActive,
}: any): JSX.Element => {
	return (
		<DatePickerItem style={{width:"50px", textAlign:"center"}}>
			<div className="selectedData">{stateDatePicker}</div>
			{!!isActive && (
				<div className="dropdown-content" onClick={(e:any)=>{e.stopPropagation()}}>
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
					
				Указать даты
					<DatePickers />
				</div>
			)}
		</DatePickerItem>
	);
};
