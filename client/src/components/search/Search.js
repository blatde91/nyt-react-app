import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import Article from "../articles/Article";


class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      query: "",
      startYear: "",
      endYear: ""
    };
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    console.log(this.state.query);
    
    if(this.state.query) {
      API.searchArticle( this.state.query, this.state.startYear, this.state.endYear)
        .then(res => this.setState(
          {articles: res.data.response}))
        .catch(err => console.log(err));
    }

    
  };
  helpDanielUnderstand = () => {
  console.log(this.state.articles) }

  render() {
    return (
      <div>
      <Container fluid>
        <Row>
          <Col size="md-6">
            <form>
              <Input
                value={this.state.query}
                onChange={this.handleInputChange}
                name="query"
                placeholder="Search for an article"
              />
              <Input
                value={this.state.startYear}
                onChange={this.handleInputChange}
                name="startYear"
                placeholder="Enter start year (optional)"
              />
              <Input
                value={this.endYear}
                onChange={this.handleInputChange}
                name="endYear"
                placeholder="Enter end year (optional)"
              />
              <FormBtn
                disabled={!(this.state.query)}
                onClick={this.handleFormSubmit}
              >
                Search for Articles
              </FormBtn>
            </form>
          </Col>
        </Row>
      </Container>
      <Container>
       <Article
         articles= {this.state.articles.docs} />
      </Container> 
      </div>
    );
  }
}

export default Search;

