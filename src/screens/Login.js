import React,{useState} from 'react';
import { Link,useNavigate } from "react-router-dom";
import Navbar from "../componenet/Navbar";


export default function Login() {
  let navigate=useNavigate()
  const [credential, setCredential] = useState({ email: "", password: "" });

const handle = async (e) => {
  e.preventDefault();

  const response = await fetch("http://localhost:7000/api/login", {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: credential.email,
      password: credential.password,
    })
  });
  console.log(JSON.stringify({
    email: credential.email,
    password: credential.password,
  }));
  const json = await response.json();
  console.log(json);

  if (!json.success) {
    let emails = document.getElementById("emailss");
    let passwords = document.getElementById("passwords");
    let flagEmail = false;
    let flagPass=false;

    // if("Invalid Email address"){
    //   alert("Invalid Email address");
    // }
    // if("Invalid password"){
    //   alert("Invalid password");
    // }
    if (emails.value === "") {
      document.getElementById("emailWarning").innerHTML = "Email is Empty";
      flagEmail = false;
    } else {
      flagEmail = true;
      document.getElementById("emailWarning").innerHTML = "";
    }

    if (passwords.value === "") {
      document.getElementById("passWarnings").innerHTML = "Password is Empty";
      flagPass = false;
    } else {
      flagPass = true;
      document.getElementById("passWarnings").innerHTML = "";
    }

    if (flagEmail && flagPass && !json.success) {
      alert("Enter valid credentials");
    }
  }

  
  if (json.success) {
    // localStorage.setItem("username",credential.name)
    localStorage.setItem("useremail",credential.email)
    localStorage.setItem("authToken",json.authToken)
    navigate("/");}
}
  
  const onChange=(event)=>{
    setCredential({...credential,[event.target.name]:event.target.value})
  }
    // // const validateForm = () => {
    // //   let emails = document.getElementById("emailss");
    // //   let passwordss = document.getElementById("passwordss");
    // //   let flag = true;
    // //   if (emails.value == "") {
    // //     document.getElementById("emailWarning").innerHTML = "Email is Empty";
    // //     flag = false;
    // //   } else {
    // //     document.getElementById("emailWarning").innerHTML = "";
    // //     flag = true;
    // //   }
    // //   if (passwordss.value == "") {
    // //     document.getElementById("passWarnings").innerHTML = "Passwords is Empty";
    // //     flag = false;
    // //   } else {
    // //     document.getElementById("passWarnings").innerHTML = "";
    // //     flag = true;
    // //   }
    // //   if (flag) {
    // //     return true;
    // //   } else {
    // //     return false;
    // //   }
    // };
    return (
      <>
        <Navbar />
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5" />
            <div className="col-lg-3 col-md-4 col-sm-4 col-xs-4 loginbox  mt-5">
              {/* <div className="avatars rounded mx-auto d-block rounded-circle"></div> */}
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS81VSFqi31LuBdkodkGGM_1dLcpnbHFF2F6g&usqp=CAU"
                className="avatar rounded mx-auto d-block rounded-circle"
              />
              <h1>
                <b>Login Here</b>
              </h1>

              <form onSubmit={handle}>
                {/* <div className="mt-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                  <input type="email" id="emailss" aria-describedby="emailHelp" placeholder="Enter email"/>
                  <p id="emailWarning" className="warning" />
                </div> */}
                <div className>
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" id="emailss" aria-describedby="emailHelp" placeholder="Enter email" name="email" value={credential.email} onChange={onChange}/>
                <p id="emailWarning" className="warning" />
                </div>


                <div className="mt-2">
                  <label htmlFor="exampleInputPasswords1" className="form-label">
                    Passwords
                  </label>
                  <input
                    type="password"
                    id="passwords"
                    placeholder="Enter passwords" name="password" value={credential.password} onChange={onChange}
                  />
                  <p id="passWarnings" className="warning" />
                </div>
                <button type="submit" className="button btn-block">
                  Login In
                </button>
                <Link className="option" to="/signin">
                  Dont have an account?
                </Link>
              </form>
            </div>
            <div className="col-lg-4 col-md-5 col-sm-5 col-xs-5" />
          </div>
        </div>
      </>
    );
  }
