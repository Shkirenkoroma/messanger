export const transformPhoneNumber = (number:string) => {
   return number.replace(/^(\d)(\d{3})(\d{3})(\d{2})(\d{2})$/, '+$1($2)$3-$4-$5')
}

export const transformTime = (seconds:number) => new Date(seconds*1000).toUTCString().split(/ /)[4]