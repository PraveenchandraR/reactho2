import React from 'react';
import { useState } from 'react';
import "./style.css";

function Form() {
    const [name, setName] = useState("");
    const [department, setDepartment] = useState("");
    const [rating, setRating] = useState("1");
      const [allUsers, setAllUsers] = useState([]);

   
    const handleSubmit = (event) => {
        event.preventDefault();
        const newUser = {
            name: name,
            department: department,
            rating: rating,
        };
       
          setAllUsers([...allUsers, newUser]);
    };



    return (
        <div className='mainbody'>
            <h1 className='heading'>EMPLOYEE FEEDBACK FORM</h1>
            <div className='form'>
                <form onSubmit={handleSubmit} >
                    <label htmlFor={"name"}>Name : </label>
                    <input type="text" name="name" className='text' id="name" placeholder='enter name..' onChange={(event) => setName(event.target.value)} value={name} required></input>
                    <br></br>

                    <label htmlFor={"Department"}>Department : </label>
                    <input type={"text"} name="department" className='text' id="department" placeholder={'enter Dept..'} onChange={(event) => setDepartment(event.target.value)} value={department} required></input>
                    <br></br>
                
                    <label htmlFor={"rating"}>Rating : </label>
                    <input type={"number"} name="rating" className='text' id="rating" placeholder={"enter rating"} onChange={(event) => setRating(event.target.value)} value={rating} required></input><br>
                    </br>
                    <button type="submit" value="Submit" className='sub'>Submit</button><br></br>
              
                </form>
            </div>
            <br></br>
            <hr></hr>
            <div className='table'>
                <div className='details' >
                    {allUsers.map((details,index) => (
                        <table key={index}>
                            <tbody><tr>
                                <td>Name: {details.name} <br />
                                    Department: {details.department} <br />
                                    Rating: {details.rating}</td></tr></tbody></table>
                    ))}
                 
        
                </div>
            </div>
        </div>
    );
}
export default Form;