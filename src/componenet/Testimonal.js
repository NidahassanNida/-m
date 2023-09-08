import React from 'react'
class Testimonal extends React.Component {
    render() { 
        return (
            <div className="row text-center" id='reviews'>
        <div className="col-sm-12 test">
          <h1>Testimonials</h1>
          <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGh1bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" className="i" />
                <div className="carousel-caption  rounded-3">
                  <div className="d-none d-md-block">
                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGh1bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" width={100} height={90} className="mt-5 rounded-circle" alt="..." />
                  </div>
                  <p>Lorem ipsum dolor sit amet consectetur 
                    tem sequi voluptate enim sapiente magni asperiores beatae s
                    int minus consectetur ea similique ipsam aperiam? Tempore 
                    dicta culpa ipsum, saepe eum expedita deserunt, ratione rem, ut fugiat commodi non obcaecati quos a
                    voluptatibus?</p>
                  <h5 className="nida">QAZ-Web Developer</h5>
                </div>
              </div>
              <div className="carousel-item">
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGh1bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" className="i" />
                <div className="carousel-caption rounded-3">
                  <div className="d-none d-md-block">
                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGh1bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" width={100} height={90} className="mt-5 rounded-circle" alt="..." />
                  </div>
                  <p>Lorem ipsum dolor sit amet consectetur 
                    tem sequi voluptate enim sapiente magni asperiores beatae s
                    int minus consectetur ea similique ipsam aperiam? Tempore 
                    dicta culpa ipsum, saepe eum expedita deserunt, ratione rem, ut fugiat commodi non obcaecati quos a
                    voluptatibus?</p>
                  <h5 className="nida">XYZ-Web Developer</h5>
                </div>
              </div>
              <div className="carousel-item">
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGh1bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" className="i" />
                <div className="carousel-caption  rounded-3">
                  <div className="d-none d-md-block">
                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGh1bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" width={100} height={90} className="mt-5 rounded-circle" alt="..." />
                  </div>
                  <p>Lorem ipsum dolor sit amet consectetur 
                    tem sequi voluptate enim sapiente magni asperiores beatae s
                    int minus consectetur ea similique ipsam aperiam? Tempore 
                    dicta culpa ipsum, saepe eum expedita deserunt, ratione rem, ut fugiat commodi non obcaecati quos a
                    voluptatibus?</p>
                  <h5 className="nida">ABC-Web Developer</h5>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
        );
    }
}
 
export default Testimonal;