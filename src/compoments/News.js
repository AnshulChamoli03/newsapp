import React, { Component } from "react";
import Newsitem from "./Newsitem";

export class News extends Component {


  constructor() {
    super();
    console.log("a");
    this.state = {
      articles: []  ,
      loading: false,
    };
  }

async  componentDidMount(){
    let url = "https://newsapi.org/v2/everything?q=tesla&from=2023-05-25&sortBy=publishedAt&apiKey=84ffd5e356f74999b5c0b5aa8f133792"
    let data = await fetch(url)
    let parsed = await data.json()
    console.log(parsed)
    this.setState({articles: parsed.articles})
  }

  render() {
    return (
      <div className="container">
        <h1>News Headlines</h1>
        <div className="row">
          {this.state.articles.map((element) => {
            return <div className="container m-3 col-md-3" key = {element.url}>
              <Newsitem
                title={element.title?element.title:""}
                description={element.description?element.description:""}
                imageUrl={element.urlToImage}
                url = {element.url}
              />
            </div>;
          })}
        </div>
      </div>
    );
  }
}

export default News;
