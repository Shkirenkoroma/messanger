import React, { useState } from "react";
import { Container } from "react-bootstrap";

const Datepickertofrom = () =>
{
 const [disable, setDisable]= useState(true);
 const [todate, setTodate]= useState([]);
 const [fromdate, setFromdate]= useState([]);
const [todateformat, setTodateformat]= useState('');
const [fromdateformat, setFromdateformat]= useState('');
    
 const handletodate= (e:any)=>{
    const gettodatevalue= e.target.value;
    const setdateformat= gettodatevalue.split('-');
    const settoyear= setdateformat[0];
    const settomonth= setdateformat[1];
    const settodate= setdateformat[2];
    const settodateformat= settoyear+""+settomonth+""+settodate;
    setTodate(gettodatevalue);
    setTodateformat(settodateformat);
    setDisable(false);
 }

 const handlefromdate= (e:any)=>{
    const getfromdatevalue= e.target.value;
    const setfromformat= getfromdatevalue.split("-");
    const setfromyear= setfromformat[0];
    const setfrommonth= setfromformat[1];
    const setfromdate= setfromformat[2];
    const setfromformatdate= setfromyear+""+setfrommonth+""+setfromdate;   
    setFromdate(getfromdatevalue);
    setFromdateformat(setfromformatdate);
   console.log(setfromformatdate);
 }
 const handleSubmit= (e:any)=>{
    e.preventDefault();

    alert("todate "+todate+ "form date"+ fromdate);

    if(todateformat > fromdateformat )
    {
    alert("Please select valid date");
    } else  {

     alert("Successfull !");
    }

 }


return(
<React.Fragment>
<Container>
<div className="row fthight">
<div className="col-sm-8  mt-3">
    <form onSubmit={ handleSubmit}>
        <div className="row mb-4 ">
        <div className="col-sm-5">
        <input type="date" className="form-control" name="todate" placeholder="dd-mm-yyyy" onChange={(e)=>handletodate(e)}   />
        <span className="text-danger"> </span>
        </div>
        </div>

        <div className="row mb-4 ">
       
        <div className="col-sm-5">
        <input type="date" className="form-control" name="fromdate" placeholder="dd-mm-yyyy" disabled={disable}  onChange={(e)=>handlefromdate(e)}  />                    
        </div>
        </div>   

        <div className="row mb-4 ">
        <label className="col-sm-2 col-form-label"></label>
        <div className="col-sm-5">
        <button className="btn btn-success"> Submit </button>                     
        </div>
        </div>
  </form>
</div>
</div>
</Container>  
</React.Fragment>
);
}
export default Datepickertofrom;