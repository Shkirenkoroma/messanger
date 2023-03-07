import moment from "moment";
import 'moment/locale/nl';
import dateFormat from "dateformat";

export const transformPhoneNumber = (number:string):string => {
   return number.replace(/^(\d)(\d{3})(\d{3})(\d{2})(\d{2})$/, '+$1($2)$3-$4-$5')
};

export const transformTime = (seconds:number):string => new Date(seconds*1000).toUTCString().split(/ /)[4];


export const changeData = (days:number):any=>{
   const day = 'days';
   const date = moment().subtract(days, day).locale('nl').format("L");
   return date
} 
export const currentData = ()=>{

   const date = moment().locale('nl').format("L");
   return date
} 