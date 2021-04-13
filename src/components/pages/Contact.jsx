import React from "react";

const Contact = () => {
  return (
    <div className="container">
      <h1>Contact Us</h1>
      <form>
      <div className="mb-3">
          <label for="exampleInputName" className=""> Name </label>
          <input type="text" className="form-control" id="exampleInputName" aria-describedby="nameHelp"/>
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">Mobile</label>
          <input type="number" className="form-control" id="exampleInputPassword1"/>
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};
export default Contact;
