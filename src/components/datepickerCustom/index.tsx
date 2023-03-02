import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./styles.css";
import calendar from "../../assets/svg/datepicker/icon-calendar.svg";
export const DatePickers = (): JSX.Element => {
	const [dateStart, setDateStart] = useState();
	const [dateEnd, setDateEnd] = useState();

	function onChangeHandler(value: any) {
		setDateStart(value[0]);
		setDateEnd(value[1]);
	}
	return (
      <div className="date" >
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
      <img src={calendar} alt="calendaricon"  onClick={onChangeHandler}/>
      </div>
	);
};
