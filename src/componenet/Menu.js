import React,{useEffect, useState} from 'react'
import Cart from './Cart';


// export default function Menu() {
//   const [search,setsearch]=useState('')
//   const [foodcategory,setfoodcategory]=useState([])
//   const [fooditem,setfooditem]=useState([])


//   const localData=async()=>{
//     let response=await fetch("http://localhost:7000/api/foodData", {
//       method: 'POST',
//       headers: {'Content-Type': 'application/json'},
//     });
//     response=await response.json();

//     setfooditem(response[0]);
//     setfoodcategory(response[1]);
//   }
//   useEffect(()=>{
//     localData()
//   },[])
export default function Menu() {
  const [search, setSearch] = useState('');
  const [foodcategory, setFoodCategory] = useState([]);
  const [fooditem, setFoodItem] = useState([]);

  const localData = async () => {
    try {
      const response = await fetch("http://localhost:7000/api/foodData", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });
      const data = await response.json();
      setFoodItem(data[0]);
      setFoodCategory(data[1]);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    localData();
  }, []);

  return (
    <>
            <div className="row " id="explore">
            <div className="col-lg-12 cartsection text-center">
              <h1 className="explorefood">Explore Our Foods</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.Modi alias iusto temporibus, 
                maxime iste nisi ipsam quos qui voluptatum atque<br /> reiciendis nemo consectetur veniam
                doloremque nam! Sunt praesentium vel.voluptatum atque<br /> reiciendis nemo consectetur veniam
                doloremque nam! Sunt praesentium vel</p>
            </div> {/* col-lg-12 */}

            <div className="row">
              <div className="col-lg-2"></div>
              <div className="col-lg-8">
              <div className="d-flex justify-content-center container">
        <input className="search" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
        {/* <button className="btn1 btn-outline-success searchbtn" type="submit">Search</button> */}
      </div>
              </div>
              <div className="col-lg-2 col-md-0"></div>
            </div>


          
          </div>

          <div className='container-fluid'>
  {foodcategory.length !== 0 ? (
    foodcategory.map((category) => (
      <div className='row' key={category._id}>
        {/* CATEGORY REMOVE KARNA HAI */}
        {/* <div className='explorefood'>{category.CategoryName}</div>
        <hr /> */}
        {/* CATEGORY REMOVE KARNA HAI */}

        {fooditem.length !== 0 ? (
          fooditem
            .filter((item) => 
            (item.CategoryName === category.CategoryName) && (item.CategoryName.toLowerCase().includes(search.toLocaleLowerCase())))
            .map((filteritem) => (
              <div key={filteritem._id} className='col-lg-4 col-md-6 col-sm-6'>
                <Cart
                fooditem={filteritem}
                  // foodName={filteritem.name}
                  // foodPrice={filteritem.price}
                  // foodImage={filteritem.img}
                  // foodTime={filteritem.time}



                  // increamentQuantity={increamentQuantity} 
                  // decreamentQuantity={decreamentQuantity} 
                  // removeItem={removeItem}
                />
              </div>
            ))
        ) : (
          <div>No such data</div>
        )}
      </div>
    ))
  ) : (
    ""
  )}</div>
          </>
  )
}
