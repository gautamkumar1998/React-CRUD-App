import axios from "axios";
import React, { useState, useEffect } from "react";
import {useHistory, useParams} from 'react-router-dom';

const EditUser = () => {

    const {id} = useParams();
    let history = useHistory();
  const [userField, setuserField] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });
  const { name, username, email, phone, website } = userField;
  useEffect(() =>{
    // alert(id);
    loaduser();
}, [])
  const onInputChange =(e) =>{
    //   console.log(e.target.value);
    setuserField({...userField, [e.target.name]: e.target.value})     //This is set the value to clicked and enter by the user to which name section.
  }

  const onSubmit = async e =>{
      e.preventDefault();
      await axios.put(`http://localhost:3005/user/${id}`, userField);    //Here await means, it wait for a time when the data is not come & we try to send all the data to userField.
      history.push("/");   //Here history is used to redirect the page to home page.
  }

  const loaduser = async e =>{       //This is used for edit the user and maintain the data in every section of input field
      const result = await axios.get(`http://localhost:3005/user/${id}`)
      console.log(result);
      setuserField(result.data);
  }
  return (
    <>
      <form onSubmit = {e =>onSubmit(e)}>
        <div className="container border shadow mt-4">
          <div className="form-group mb-3">
            <label for="exampleInputName"> Name </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputName"
              aria-describedby="nameHelp"
              name="name"
              value={name}
              onChange={e =>onInputChange(e)}
            />
          </div>
          <div className="form-group mb-3">
            <label for="exampleInputEmail1">User Name</label>
            <input
              type="username"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="username"
              value={username}
              onChange={e =>onInputChange(e)}
              
            />
          </div>
          <div className="form-group mb-3">
            <label for="exampleInputPassword1">Email</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputPassword1"
              name="email"
              value={email}
              onChange={e =>onInputChange(e)}
            />
          </div>
          <div className="form-group mb-3">
            <label for="exampleInputPassword1">Phone</label>
            <input
              type="number"
              className="form-control"
              id="exampleInputPassword1"
              name="phone"
              value={phone}
              onChange={e =>onInputChange(e)}
            />
          </div>
          <div className="form-group mb-3">
            <label for="exampleInputPassword1">Website</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              name="website"
              value={website}
              onChange={e =>onInputChange(e)}
            />
          </div>
          <button type="submit" className="btn btn-warning btn-block">
            Update User
          </button>
        </div>
      </form>
    </>
  );
};
export default EditUser;
