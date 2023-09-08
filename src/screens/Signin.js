import React,{useState} from 'react';
import { Link,useNavigate} from "react-router-dom";
import Navbar from '../componenet/Navbar';


export default function Signin() {
  let navigate=useNavigate()
      const [credential, setCredential] = useState({name: "",email: "",password: "",address: ""});
      const handle = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:7000/api/signin", {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            name: credential.name,
            email: credential.email,
            password: credential.password,
            address: credential.address
          })
        });
        console.log(JSON.stringify({
          name: credential.name,
          email: credential.email,
          password: credential.password,
          address: credential.address
        }))
        const json = await response.json()
        console.log(json);

        if (!json.sucess) {
          let name = document.getElementById("name");
          let emails = document.getElementById("emails");
          let password = document.getElementById("password");
          let address = document.getElementById("address");
          // if(json.sucess=="Password length"){
          //   alert("Password length");
          // }
          if(json.errors=="user email present"){
            alert("Email already present");
          }
          // if(json.errors=="password length"){
          //   alert("lenght")
          //   document.getElementById("passWarning").innerHTML =
          //     "Password must be 8 characters";
          // }
         
  
          if (name.value == "") {
            document.getElementById("nameWarning").innerHTML = "Name is Empty";
          } else {
            document.getElementById("nameWarning").innerHTML = "";
          }
          if (emails.value == "") {
            document.getElementById("emailWarning").innerHTML = "Emails is Empty";
          }else {
            document.getElementById("emailWarning").innerHTML = "";
          }
          if (password.value == "") {
            document.getElementById("passWarning").innerHTML = "Password is Empty";
          }
          else if (password.value.length < 8) {
            document.getElementById("passWarning").innerHTML =
              "Password must be 8 characters";
            } 
          else {
            document.getElementById("passWarning").innerHTML = "";
          }
          
  
          if (address.value == "") {
            document.getElementById("addressWarning").innerHTML = "Address is Empty";
          }
          else {
            document.getElementById("addressWarning").innerHTML = "";
          }
          
          

        
        // if (json.success) {
        //   if (password.value.length < 8) {
        //     document.getElementById("passWarning").innerHTML =
        //       "Password must be 8 characters";
        //     }
        //     else{
        //       // localStorage.setItem("username",credential.name)
        //       localStorage.setItem("username",credential.name)
        //       localStorage.setItem("authToken",json.authToken)
        //       alert("Account Created");
        //       navigate("/");}
        //   }
      }
      if (json.sucess){
        localStorage.setItem("username",credential.name)
              localStorage.setItem("authToken",json.authToken)
              alert("Account Created");
              navigate("/");}
    }
      const onChange=(event)=>{
        setCredential({...credential,[event.target.name]:event.target.value})
      }
return  (
    <>
    <Navbar/>
     <div className="container-fluid">
        <div className="row">
          <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5" />
          <div className="col-lg-3 col-md-4 col-sm-4 col-xs-4 loginbox mt-5">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS81VSFqi31LuBdkodkGGM_1dLcpnbHFF2F6g&usqp=CAU" className="avatar rounded mx-auto d-block rounded-circle" />
            <h1><b>Sign In Here</b></h1>

              <form onSubmit={handle}>
              <div className>
                <label className="form-label">Name</label>
                <input type="text" id="name"placeholder="Enter name" name="name" value={credential.name} onChange={onChange}/>
                <p id="nameWarning" className="warning" />
              </div>

              <div className>
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" id="emails" aria-describedby="emailHelp" placeholder="Enter email" name="email" value={credential.email} onChange={onChange}/>
                <p id="emailWarning" className="warning" />
                
              </div>
              <div className>
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" id="password" placeholder="Enter password" name="password" value={credential.password} onChange={onChange}/>
                <p id="passWarning" className="warning" />
              </div>
              <div className>
                <label className="form-label">Enter address</label>
                <input type="text" id="address"placeholder="Enter address" name="address" value={credential.address} onChange={onChange}/>
                <p id="addressWarning" className="warning" />
              </div>

              <button type="submit" className="button btn-block">Sign In</button>
              <Link className="option" to="/login">Already have an account?</Link>
            </form>
          </div>
          <div className="col-lg-4 col-md-5 col-sm-5 col-xs-5" />
        </div>
      </div>
    </>
    );
}