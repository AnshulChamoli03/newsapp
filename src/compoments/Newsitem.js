import React, { Component } from "react";

let s = {
  'height' : '286px',
  'width' : '191px'
}

export class Newsitem extends Component {
  

  render() {
    let {title, description, imageUrl, url} = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{width: "18rem"}}>
          <img src={imageUrl} className="card-img-top" alt="..." style={{s}} />
          <div className="card-body">
            <h5 className="card-title">{title.slice(0,50)}...</h5>
            <p className="card-text" >
              {description.slice(0,90)}...
            </p>
            <a href={url} target="_blank" className="btn btn-sm btn-primary">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;
