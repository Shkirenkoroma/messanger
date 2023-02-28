import React from "react";
import { Select, Space } from "antd";

const handleChange = (value: string) => {
	console.log(`selected ${value}`);
};

export const Selectrum: React.FC = () => (
	<Space wrap>
		<Select
			defaultValue="Все организации"
			style={{ width: 300 }}
			onChange={handleChange}
		
		
			options={[
				{
					value: "ИП Жандармов Евгений Романович",
					label: "ИП Жандармов Евгений Романович",
				},
				{
					value: "ИП Романов Сергей Владимирович",
					label: "ИП Романов Сергей Владимирович",
				},
				{ value: "Все организации", label: "Все организации" },
			]}
		/>
	</Space>
);

export const Selectrumtwo: React.FC = () => (
	<Space wrap>
		<Select
			defaultValue="фото"
			style={{ width: 150 }}
			onChange={handleChange}
			options={[
				{ value: "фото", label: "фото" },
				{
					value: "ИП Романов Сергей Владимирович",
					label: "ИП Романов Сергей Владимирович",
				},
				{ value: "Все организации", label: "Все организации" },
			]}
		/>
	</Space>
);

export const SelectSorting: React.FC = () => (
	<Space wrap>
		<Select
			defaultValue="фото"
			style={{ width: 150 }}
			onChange={handleChange}
			options={[
				{ value: "фото", label: "фото" },
				{
					value: "ИП Романов Сергей Владимирович",
					label: "ИП Романов Сергей Владимирович",
				},
				{ value: "Все организации", label: "Все организации" },
			]}
		/>
	</Space>
);
