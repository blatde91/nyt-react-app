import React, { Component } from "react";
import API from "../../utils/API";
import { format } from "date-fns";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import { ResultsBox } from "../resultsbox/resultsbox";


class Articles extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
    };
  }

  componentWillReceiveProps(inheritedProps) {
    this.setState({
      articles: inheritedProps.articles
    });
  }

  saveArticle(articleData) {
    const article = articleData.article;
    const date = format(article.pub_date, "MM/DD/YYYY");
    const newArticle = {
      title: article.headline.main,
      date: date,
      url: article.web_url,
    };
    console.log(newArticle);
    API.saveArticle(newArticle)
      .then(res => console.log(res))
      .then(res => this.parseArticles(article, article._id))
      .catch(err => console.log(err));
  }

  parseArticles(article, id) {
    console.log(this.props.articles[0]._id);
    const articles = this.state.articles;
    const newArticles = articles.filter( article => id !== article._id);
    console.log(newArticles);
    this.setState({articles: newArticles});
  }

  displayArticles(articles) {
    
    if(articles && articles.length > 0) 
      return articles.map((article, index) =>
        <li className="list-group-item" key={index}>
          <ResultsBox
            href={`${article.web_url}`}
            title={`${article.headline.main}`}
            onClick={this.saveArticle}
          />
        </li>);
     else 
      return <div className="panel panel-default">
      <div className="panel-body">
        No articles
      </div>
    </div>;
    
  }

  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-header">
          <h1>Search Results</h1>
        </div>
        <div className="panel-body">
          {this.displayArticles(this.state.articles)}
        </div>
      </div>
    )
  }
}

export default Articles;


