import React from "react";
class Faq extends React.Component {
  // render() {
  //   window.addEventListener('scroll',function(){
  //     let aeroplane=this.document.getElementById("myBtn");
  //     if(this.window.pageYOffset>=700){
  //       aeroplane.classList.add("aeroplane");
  //     }
  //     else{
  //       aeroplane.classList.remove("aeroplane");
  //     }
  //   })
  render() {
    window.addEventListener('scroll', () => {
      try{
        let aeroplane = document.getElementById("myBtn");
      if (window.pageYOffset >= 700) {
        aeroplane.classList.add("aeroplane");
      } 
      else{
        aeroplane.classList.remove("aeroplane");
      }
      }
      catch(error){
        console.log(error);
        
      }
    });



    
    const topFunction = () => {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    };
    return (
      <div>
        <div className="row" id="faq">
          <h1
            className="text-center"
            style={{ marginTop: "80px", color: "maroon", fontWeight: 900 }}
          >
            Frequently Asked Questions
          </h1>
          <div className="col-lg-6">
            <h1 className="question">
              <b>~Lorem ipsum dolor, sit amet consectetur adipisicing elit.</b>
            </h1>
            <p className="answer">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptatibus soluta ad nemo provident placeat atque qui expedita
              nobis, vero velit quos rerum explicabo minus, officia perferendis
              cum laborum eos alias incidunt aliquam a tempora natus suscipit!
              Praesentium cupiditate animi illo. Corrupti, quas nobis sit earum
              optio, aut aspernatur cupiditate quo tenetur voluptatibus aliquam
              quod error iusto eius assumenda officia, perspiciatis sapiente
              distinctio! Earum commodi officiis nihil tempora ipsum facilis
              distinctio? Dignissimos cupiditate assumenda maiores delectus,
              mollitia, ducimus recusandae doloremque deleniti officia commodi
              aspernatur suscipit nemo libero rem consequuntur odit architecto
              nisi molestiae laboriosam? Laudantium officia praesentium facilis
              sequi facere ab!
            </p>
          </div>
          <div className="col-lg-6">
            <h1 className="question">
              <b>~Lorem ipsum dolor, sit amet consectetur adipisicing elit.</b>
            </h1>
            <p className="answer">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptatibus soluta ad nemo provident placeat atque qui expedita
              nobis, vero velit quos rerum explicabo minus, officia perferendis
              cum laborum eos alias incidunt aliquam a tempora natus suscipit!
              Praesentium cupiditate animi illo. Corrupti, quas nobis sit earum
              optio, aut aspernatur cupiditate quo tenetur voluptatibus aliquam
              quod error iusto eius assumenda officia, perspiciatis sapiente
              distinctio! Earum commodi officiis nihil tempora ipsum facilis
              distinctio? Dignissimos cupiditate assumenda maiores delectus,
              mollitia, ducimus recusandae doloremque deleniti officia commodi
              aspernatur suscipit nemo libero rem consequuntur odit architecto
              nisi molestiae laboriosam? Laudantium officia praesentium facilis
              sequi facere ab!
            </p>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <h1 className="question">
                <b>
                  ~Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </b>
              </h1>
              <p className="answer">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatibus soluta ad nemo provident placeat atque qui expedita
                nobis, vero velit quos rerum explicabo minus, officia
                perferendis cum laborum eos alias incidunt aliquam a tempora
                natus suscipit! Praesentium cupiditate animi illo. Corrupti,
                quas nobis sit earum optio, aut aspernatur cupiditate quo
                tenetur voluptatibus aliquam quod error iusto eius assumenda
                officia, perspiciatis sapiente distinctio! Earum commodi
                officiis nihil tempora ipsum facilis distinctio? Dignissimos
                cupiditate assumenda maiores delectus, mollitia, ducimus
                recusandae doloremque deleniti officia commodi aspernatur
                suscipit nemo libero rem consequuntur odit architecto nisi
                molestiae laboriosam? Laudantium officia praesentium facilis
                sequi facere ab!
              </p>
            </div>
            <div className="col-lg-6">
              <h1 className="question">
                <b>
                  ~Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </b>
              </h1>
              <p className="answer">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatibus soluta ad nemo provident placeat atque qui expedita
                nobis, vero velit quos rerum explicabo minus, officia
                perferendis cum laborum eos alias incidunt aliquam a tempora
                natus suscipit! Praesentium cupiditate animi illo. Corrupti,
                quas nobis sit earum optio, aut aspernatur cupiditate quo
                tenetur voluptatibus aliquam quod error iusto eius assumenda
                officia, perspiciatis sapiente distinctio! Earum commodi
                officiis nihil tempora ipsum facilis distinctio? Dignissimos
                cupiditate assumenda maiores delectus, mollitia, ducimus
                recusandae doloremque deleniti officia commodi aspernatur
                suscipit nemo libero rem consequuntur odit architecto nisi
                molestiae laboriosam? Laudantium officia praesentium facilis
                sequi facere ab!
              </p>
            </div>
          </div>
        </div>
        <button onClick={() => {
          topFunction();
          }}
          id="myBtn" title="Go to top" className=" "
        ><i className="bi bi-airplane-engines-fill" />
        </button>
{/* <div className="container">
<table className="table " style={{"backgroundColor":"maroon",color:"white"}}>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody >
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table> */}
{/* </div> */}



      </div>
    );
  }
}

export default Faq;
