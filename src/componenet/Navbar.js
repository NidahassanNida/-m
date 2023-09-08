import React,{useState} from 'react';
import { Link,useNavigate } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import { useCart } from './ContextReducer';
import Modal from '../Modal';
import Cart from '../screens/Cart';

export default function Navbar(props) {
  let fooditem = props.name;
  console.log("name",fooditem);
  let data = useCart();
  const [cartView, setCartView] = useState(false)

      let navigate=useNavigate()
      const handleLogout=()=>{
        localStorage.removeItem("authToken")
        navigate("/login")
      }
      window.addEventListener('scroll',function(){
        let navbar=document.getElementById("navbar");
        try{
          if(this.window.pageYOffset>=1900){
            navbar.classList.add("header");
          }
          else if (navbar.classList.contains('header')) {
            navbar.classList.remove('header');
          }
        }
        catch(error){
          console.log(error);
          
        }
      })


      const change=()=>{
        document.body.style.backgroundColor="black";
        document.body.style.color="white";
        let navbars=document.getElementById("navbar");
        try{
          navbars.classList.remove('bg-body');
          navbars.classList.add("bg-black");
        }catch(error){console.log(error);}

        let text=document.getElementsByClassName("text");
        for(let elm of text){
          elm.style.color="black";
        }
        let nav=document.getElementById("navs");
        nav.style.backgroundColor="brown";
        let black=document.getElementById("black");
        black.style.display="none";
        let black1=document.getElementById("black1");
        black1.style.display="block";
      }
      const changeBlack=()=>{
        let nav=document.getElementById("navs");
        nav.style.backgroundColor="white";
        let black1=document.getElementById("black1");
        black1.style.display="none";
        let black=document.getElementById("black");
        black.style.display="block";
    
        document.body.style.backgroundColor="white";
        document.body.style.color="black";
        let text=document.getElementsByClassName("text");
        let navbars=document.getElementById("navbar");
        try{
          navbars.classList.remove('bg-black');
          navbars.classList.add("bg-body");
        }catch(error){console.log(error);}
        for(let elm of text){
          elm.style.color="black";
        }
      }
      const handleNav = async () => {      
        const response = await fetch("http://localhost:7000/api/login", {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: credential.email,
            password: credential.password,
          })
        });
        // export default function Navbar(props) {
          // username:localStorage.getItem('username')
      }
      
        return  (
            <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-body rounded" id="navbar">
              <div className="container-fluid">
                
              {(localStorage.getItem("authToken"))?
                      <a className="navbar-brand">{localStorage.getItem('username')}</a>
                      :<a className="navbar-brand">FOODIES</a>
              }
                {/* <a className="navbar-brand">FOODIES</a> */}
                {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBvWohAprJQ8ZMvDnHS7WA0WEI6S8zBdWIXT7sT4wi3HLsFwIVpcZVtbjYok0lIqRETp4&usqp=CAU" className='avatar mt-1'/> */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" id="navs" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/">Home</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/about">About   Us</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/menu">Explore Food</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/review">Reviews</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/faq">FAQ</Link></li>

                    
                    {(localStorage.getItem("authToken"))?
                      <Link to="/myorder" className="nav-link me-5">My Order</Link>
                      :""
                    }
                  </ul>
                  <span id="black" className="bi bi-toggle-on" onClick={()=>{change()}} />
                  <span id="black1" className="changeBlack bi bi-toggle-on" onClick={()=>{changeBlack()}} />
                  
                  {(!localStorage.getItem("authToken"))?
                    <div>
                      <Link to="/signin" className='navlog'>Sign In</Link>
                      <Link to="/login" className=' mx-1 navlog'>Login In</Link>
                    </div>:
                        <div className='d-flex'>
                          <div className='navlog'onClick={() => setCartView(true)}><i className="bi bi-cart-fill me-1"></i>
                          <Badge className='bg-danger' >{data.length}</Badge>My Cart
                          </div>
                          {cartView ? <Modal onClose={() => setCartView(false)}><Cart></Cart></Modal> : ""}
                          
                          
                          {/* <div className="btn bg-white text-success mx-2 " onClick={loadCart}>
                                    <Badge color="secondary" badgeContent={items.length} >
                                        <ShoppingCartIcon />
                                    </Badge>
                                    Cart
                                </div>

                                {cartView ? <Modal onClose={() => setCartView(false)}><Cart></Cart></Modal> : ""} */}






                          <div className='mx-1 navlog' onClick={handleLogout}>Logo Out</div>
                        </div>
                  }
                </div>
              </div>
            </nav>
          );
        };

