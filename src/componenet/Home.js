import React from 'react'
class Home extends React.Component {
    render() { 
        return (
            <div className="row" id="home">
        <div className="col-lg-6 col-sm-12 portion1">
          <h1 className="food food1">Good food choices are</h1>
          <h1 className="food">good investments.</h1>
          <p className="lorem">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi alias iusto temporibus, 
            maxime iste nisi ipsam quos qui voluptatum atque reiciendis nemo consectetur veniam
            doloremque nam! Sunt praesentium vel placeat.</p>
          <button type="button" className="rounded-0 btn1">Order Now  <i className="bi bi-basket" /></button>
          <button type="button" className="rounded-0 btn2">Order Now  <i className="bi bi-caret-right-fill" /></button>
        </div>{/* col 1 */}
        <div className="col-lg-5 col-md-5 row1col2" />{/* col 2 */}
      </div>
        );
    }
}

export default Home