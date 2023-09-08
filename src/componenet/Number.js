import React from 'react'
class Number extends React.Component {
    render() { 
        return (
            <div className="row">
        <div className="col-lg-12">
          <div className="row2">
            <h1 className="newrow">1287 +</h1>
            <h1 className="newrow">5786 +</h1>
            <h1 className="newrow">1440 +</h1>
            <h1 className="newrow">7110 +</h1>
          </div>{/* row2 */}
          <div className="row3">
            <p className="newp">SAVINGS</p>
            <p className="newp">PHOTOS</p>
            <p className="newp">ROCKETS</p>
            <p className="newp">GLOBES</p>
          </div> </div>{/* row2 */}
      </div> 
        );
    }
}
 
export default Number;