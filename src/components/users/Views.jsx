import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link, useParams} from 'react-router-dom';

const Views =() =>{

    const {id} = useParams();

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

    const loaduser = async e =>{       //This is used for edit the user and maintain the data in every section of input field
        const result = await axios.get(`http://localhost:3005/user/${id}`)
        console.log(result);
        setuserField(result.data);
    }
    return (
        <div className="container">
            <Link className="btn btn-secondary" to="/">Back To Home Page</Link>
            <h1>User Id:{id}</h1>
            <ul className="list-group w-50 display-flex justify-content-center align-content-center">
                <l1 className="list-group-item">Name:{name}</l1>
                <li className="list-group-item">Email:{email}</li>
                <li className="list-group-item">Mobile:{phone}</li>
                <li className="list-group-item">Website:{website}</li>
            </ul>
        </div>
    )
}
export default Views;