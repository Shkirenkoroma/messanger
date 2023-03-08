import { useState, useEffect, useLayoutEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./styles.css";
import calendar from "../../assets/svg/datepicker/icon-calendar.svg";
import dateFormat from "dateformat";

export const DatePickers = ({
	setStateDatePicker,
	setIsActive,
	stateDatePicker,
	setTimeFrom,
	setTimeTo,
	timeFrom,
	timeTo,
}: any): JSX.Element => {
	const [dateStart, setDateStart] = useState();
	const [dateEnd, setDateEnd] = useState();
	setTimeFrom(dateFormat(dateStart, "dd-mm-yyyy"));
	setTimeTo(dateFormat(dateEnd, "dd-mm-yyyy"));
	
	useLayoutEffect(()=>{
	setTimeFrom('');
	setTimeTo('');
	
}, [])	

	
const onChangeHandler = (value: any) => {
	setDateStart(value[0]);
	setDateEnd(value[1]);
	};
	return (
		<div className="date">
			<DatePicker
				id="dateStartEnd"
				selectsRange={true}
				startDate={dateStart}
				endDate={dateEnd}
				onChange={onChangeHandler}
				dateFormat="dd-mm-yyyy"
				showDisabledMonthNavigation
				placeholderText="___.___.___  -  ___.___.___"
			/>
			<img
				src={calendar}
				alt="calendaricon"
				onClick={(e: any) => {
					setIsActive(false);
				}}
			/>
		</div>
	);
};
