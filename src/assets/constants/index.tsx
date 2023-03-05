import results from "assets/svg/results.svg";
import orders from "assets/svg/orders.svg";
import messages from "assets/svg/messages.svg";
import calls from "assets/svg/calls.svg";
import people from "assets/svg/people.svg";
import documents from "assets/svg/documents.svg";
import perm_identity from "assets/svg/perm_identity.svg";
import cases from "assets/svg/cases.svg";
import data_base from "assets/svg/data_base.svg";
import settings from "assets/svg/settings.svg";
import badmark from "assets/svg/mark.svg";
import markgrey from "assets/svg/markgrey.svg";
import markgreen from "assets/svg/markgreen.svg";

export const items = [
	{ img: results, alt: "results", describe: "Итоги" },
	{ img: orders, alt: "orders", describe: "Заказы" },
	{ img: messages, alt: "messages", describe: "Сообщения" },
	{ img: calls, alt: "calls", describe: "Звонки" },
	{ img: people, alt: "people", describe: "Контрагенты" },
	{ img: documents, alt: "documents", describe: "Документы" },
	{ img: perm_identity, alt: "perm_identity", describe: "Исполнители" },
	{ img: cases, alt: "cases", describe: "Отчеты" },
	{ img: data_base, alt: "data_base", describe: "База знаний" },
	{ img: settings, alt: "settings", describe: "Настройка" },
];

export const allTypes = [
	{ value: "фото", label: "фото" },
	{
		value: "ИП Романов Сергей Владимирович",
		label: "ИП Романов Сергей Владимирович",
	},
	{ value: "Все организации", label: "Все организации" },
];

export const allEmployer = [
	{ value: "фото", label: "фото" },
	{
		value: "ИП Романов Сергей Владимирович",
		label: "ИП Романов Сергей Владимирович",
	},
	{ value: "Все организации", label: "Все организации" },
];

export const allCalls = [
	{ value: "фото", label: "фото" },
	{
		value: "ИП Романов Сергей Владимирович",
		label: "ИП Романов Сергей Владимирович",
	},
	{ value: "Все организации", label: "Все организации" },
];

export const AllEstimates = [
	{ value: "фото", label: "фото" },
	{
		value: "ИП Романов Сергей Владимирович",
		label: "ИП Романов Сергей Владимирович",
	},
	{ value: "Все организации", label: "Все организации" },
];

export const AllMistakes = [
	{ value: "фото", label: "фото" },
	{
		value: "ИП Романов Сергей Владимирович",
		label: "ИП Романов Сергей Владимирович",
	},
	{ value: "Все организации", label: "Все организации" },
];

export const allTypesConstant = [
	{ value: "Все типы", label: "Все типы" },
	{ value: "Исходящие вызовы", label: "Исходящие вызовы" },
	{ value: "Входящие вызовы", label: "Входящие вызовы" },
];

export const allEmployersConstant = [
	{ value: "Все сотрудники", label: "Все сотрудники" },
	{ value: "Ольга Ивановна", label: "Ольга Ивановна" },
	{ value: "Анастасия Валерьевна", label: "Анастасия Валерьевна" },
];

export const allCallsConstant = [
	{ value: "Все звонки", label: "Все звонки" },
	{ value: "Все клиенты", label: "Все клиенты" },
	{ value: "Новые клиенты", label: "Новые клиенты" },
	{ value: "Все исполнители", label: "Все исполнители" },
	{ value: "Через приложение", label: "Через приложение" },
	{ value: "Прочие звонки", label: "Прочие звонки" },
];

export const allSourses = [
	{ value: "Все источники", label: "Все источники" },
	{ value: "Google", label: "Google" },
	{ value: "Yandex", label: "Yandex" },
	{ value: "Rabota.ru", label: "Rabota.ru" },
	{ value: "Другие адреса", label: "Другие адреса" },
];

export const allEMarksConstant = [
	{ value: "Все оценки", label: "Все оценки" },
	{ value: "Распознать", label: "Распознать" },
	{ value: "Скрипт не использован", label: "Скрипт не использован" },
	{ value: "Плохо", img: badmark, alt: "Плохо" },
	{ value: "Хорошо", img: markgrey, alt: "Хорошо" },
	{ value: "Отлично", img: markgreen, alt: "Отлично" },
];

export const allMistakesConstant = [
	{ value: "Приветствие", label: "Приветствие" },
	{ value: "Имя", label: "Имя" },
	{ value: "Цена", label: "Цена" },
	{ value: "Скидка", label: "Скидка" },
	{ value: "Предзаказ", label: "Предзаказ" },
	{ value: "Благодарность", label: "Благодарность" },
	{ value: "Стоп-слова", label: "Стоп-слова" },
];
