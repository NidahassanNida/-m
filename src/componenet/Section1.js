import React from 'react'
class Section1 extends React.Component {
    render() { 
        return (
            <div className="row row4" id="about">
            <div className="col-lg-6">
              <img src="https://images.unsplash.com/photo-1495214783159-3503fd1b572d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGJyZWFrZmFzdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" height={400} className="rounded card-img-top" alt="..." />   
            </div>
            <div className="col-lg-6 col-pride">
              <p className="pride">We Pride Ourselves On Making Real Food From The Best Ingredients</p>
              <p className="lorem">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi alias iusto temporibus, 
                maxime iste nisi ipsam quos qui voluptatum atque reiciendis nemo consectetur veniam
                doloremque nam! Sunt praesentium vel placeat.</p>
              <button type="button" className="rounded-0 btn1">Learn More</button>
            </div>
          </div>
        );
    }
}
 
export default Section1 