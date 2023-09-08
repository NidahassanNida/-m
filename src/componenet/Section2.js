import React from 'react'
class Section2 extends React.Component {
    render() { 
        return (
            <div className="row row5">
        <div className="col-lg-4">
          <h1 style={{textAlign:"left",fontSize:"35px"}}>We Make Everything By Hands With The Best Possible Ingredeints.</h1>
          <p className="lorem">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi alias iusto temporibus, 
            maxime iste nisi ipsam quos qui voluptatum atque reiciendis nemo consectetur veniam
            doloremque nam! Sunt praesentium vel placeat.</p>
          <ul><i className="bi bi-check" />Lorem ipsum dolor sit, amet consectetur</ul>
          <ul><i className="bi bi-check" />adipisicing elit. Excepturi pariatur fug</ul>
          <ul><i className="bi bi-check" />it enim, et impedit quibusdam maiores qui</ul>
          <button type="button" className="rounded-0 btn1">Learn More</button>
        </div>
        <div className="col-lg-8">
          <div className="row rowimage1">
            <div className="col-lg-5 d-none d-lg-block image1"><img src="https://images.unsplash.com/photo-1533134242443-d4fd215305ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2hlZXNjYWtlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" height={150} /></div>
            <div className="col-lg-6 d-none d-lg-block images2"><img src="https://images.unsplash.com/photo-1610636056460-fd6aefd8cdf1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8b21sZXR0ZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" width={318} height={190} alt="" /></div>
          </div>{/*row */}
          <div className="row rowimage2">
            <div className="col-lg-6 d-none d-lg-block images3"><img src="https://images.unsplash.com/photo-1610140754642-e76140a975b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8b21sZXR0ZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" width={400} height={260} /></div>
            <div className="col-lg-2 d-none d-lg-block images4"><img src="https://images.unsplash.com/photo-1513640043734-708351c5cb0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG9tbGV0dGV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" width={250} height={260} alt="" /></div>
          </div>{/*row*/}
        </div>
      </div>
        );
    }
}
 
export default Section2