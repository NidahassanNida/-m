import React,{useState,useRef, useEffect } from 'react'
import { Link,useNavigate} from "react-router-dom";
import { useDispatchCart, useCart } from './ContextReducer'
// import { set } from 'mongoose';


export default function Cart(props) {
  let fooditem = props.fooditem;
  // console.log(fooditem)


  let navigate=useNavigate()
  const priceRef = useRef();
  const [qty, setQty] = useState(1)
  const [q, setQuantity] = useState(props.fooditem.quantity)
  
  const [id, setid] = useState(1)
  const [cart, setCart] = useState([])
  let data = useCart();
  const dispatch = useDispatchCart();


  // const handleClick = () => {
  //   if (!localStorage.getItem("token")) {
  //     navigate("/login")
  //   }
  // }


  const handleAddToCart = async () => {
    await dispatch({ type: "ADD", 
                      id:props.fooditem._id, 
                      name: props.fooditem.name, 
                      price: finalPrice,
                      qty:props.fooditem.quantity,
                      img: props.fooditem.img })
    console.log(data);
    let food = []
    for (const item of data) {
      if (item.id === fooditem._id) {
        food = item;
        break;
      }
    }
    console.log(food)
    console.log(new Date())
    // if (food !== []) {
    //   if (food.name === name && food.qty !== qty){
    //     await dispatch({ type: "UPDATE", id: props.fooditem._id, 
    //                                      price: finalPrice, 
    //                                     qty: qty })
    //     return
    //   }
    //   else if (food.id !== id) {
    //     await dispatch({ type: "ADD", id:props.fooditem._id, 
    //                                   name: props.fooditem.name, 
    //                                   price: props.fooditem.price, 
    //                                   qty: qty,
    //                                   img: props.fooditem.img })

    //     console.log("Size different so simply ADD one more to the list")
    //     return
    //   }
    //   return
    // }
    // else{

    // }

  }
    // setBtnEnable(true)

  // }
    const incrementQuantity = () => {
      props.fooditem.quantity += 1;
      setQuantity(props.fooditem.quantity);
    };
    const decrementQuantity = () => {
      if(props.fooditem.quantity>0){
        props.fooditem.quantity -= 1;
      }
      setQuantity(props.fooditem.quantity);
    };
const reset=()=>{
  props.fooditem.quantity = 0
  setQuantity(props.fooditem.quantity);
}
let finalPrice = props.fooditem.quantity * props.fooditem.price;
if(finalPrice===0){finalPrice=props.fooditem.price}
else{
  finalPrice
}
  return (
    <>
          <div className="row allcards">
              <div>
                <div className="card" style={{border:"none",width: '18rem'}}>
                  <img src={props.fooditem.img} className="card-img-top" height={190} width="250px" style={{marginLeft: '-0px'}} alt="..." />
                  <div className="card-body">
                    <h5 className="text card-title">{props.fooditem.name}</h5>
                    <p className="text card-text">{props.fooditem.time}</p>
                    {/* <p className="explorefood text">Price: Rs.{props.fooditem.price}</p> */}
                    <p className="explorefood text" ref={priceRef}>Price: Rs.{finalPrice}</p>
                    <div className="row flex-wrap justify-content-between align-items-center py-3">
                        <div className="col-4">
                            <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                                {/* <div className="btn-group" role="group" aria-label="Basic outlined example">
                                    <button type="button" className="btn3 btn-outline-primary"onClick={()=>{increamentQuantity}}>+</button>
                                    <div  className="btn3 btn-outline-primary" set={setQuantity()}>{props.fooditem.quantity}</div>
                                    <button type="button" className="btn3 btn-outline-primary"onClick={()=>{decreamentQuantity}}>-</button> */}
                                    <button type="button" className="btn3 btn-outline-primary" onClick={incrementQuantity}>+</button>
<div className="btn3 btn-outline-primary" set={setQuantity}>{props.fooditem.quantity}</div>
<button type="button" className="btn3 btn-outline-primary" 
onClick={decrementQuantity}
>-</button>
                                {/* </div> */}

                                {/* 
            <button type="button" class="btn btn-danger"onClick={()=>{props.decreamentQuantity(props.index)}}>-</button>
            <button type="button" class="btn btn-warning">{props.product.quantity}</button>
             <button type="button" class="btn btn-success"onClick={()=>{props.increamentQuantity(props.index)}}>+</button>
          </div> */}


                        </div>
                        </div>
                        <div className="col-3">
                        <button className='btn3'onClick={reset}><i class="bi bi-trash3-fill"></i></button>
                        </div>
                    </div>
                    {/* {props.fooditem.quantity*props.fooditem.price} */}
                    
                    {/* <select className="m-2 h-100 w-20 rounded"  onChange={(e)=>setQty(e.target.value)}>
                    {Array.from(Array(6), (e, i) => {
                    return (
                    <option key={i + 1} value={i + 1}>{i + 1}</option>)
                    })}
                    </select> */}

                    {/* <div  ref={priceRef} > Rs. {finalPrice}/- </div>     */}
                    
                    <button type="button" className="rounded-0 btn1"style={{"width":"100%"}}  onClick={handleAddToCart}>Add to Cart</button>
                  </div>  
                </div>
              </div>
              </div>
            </>
  )
}
