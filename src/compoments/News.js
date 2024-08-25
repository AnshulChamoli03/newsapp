import React, { Component } from "react";
import Newsitem from "./Newsitem";
 
export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
    };
  }

  async componentDidMount() {
    let url =
      `https://newsapi.org/v2/everything?q=India&language=en&sortBy=publishedAt&apiKey=84ffd5e356f74999b5c0b5aa8f133792`;
    let data = await fetch(url);
    let parsed = await data.json();
    this.setState({ articles: parsed.articles.slice(18, 36) });
  }

  // async searchit(){
  //  nlet url =
  //   `https://newsapi.org/v2/everything?q=${document.getElementById("category").value}&language=en&sortBy=publishedAt&apiKey=84ffd5e356f74999b5c0b5aa8f133792`;
  // let data = await fetch(url);
  // let parsed = await data.json();
  // this.setState({ articles: parsed.articles.slice(18, 36) });
  
  // }

  render() {
    return (
      <div className="container">
        <h1 className="text-center">News Headlines</h1>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="container m-3 col-md-3" key={element.url}>
                <Newsitem
                  title={element.title ? element.title : ""}
                  description={element.description ? element.description : ""}
                  imageUrl={
                    element.urlToImage
                      ? element.urlToImage
                      : "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/17ED0/production/_130100089_howdoenglandbeattheunbeatableteamindex.jpg"
                  }
                  url={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}


export default News;
